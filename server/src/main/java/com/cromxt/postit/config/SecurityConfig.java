package com.cromxt.postit.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.ReactiveAuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableReactiveMethodSecurity;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.SecurityWebFiltersOrder;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity.CsrfSpec;
import org.springframework.security.config.web.server.ServerHttpSecurity.FormLoginSpec;
import org.springframework.security.config.web.server.ServerHttpSecurity.HttpBasicSpec;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.security.web.server.authentication.AuthenticationWebFilter;
import org.springframework.security.web.server.authentication.ServerAuthenticationConverter;
import org.springframework.security.web.server.context.NoOpServerSecurityContextRepository;
import org.springframework.security.web.server.util.matcher.ServerWebExchangeMatchers;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@Configuration
@EnableWebFluxSecurity
@RequiredArgsConstructor
@EnableReactiveMethodSecurity
public class SecurityConfig {

    private final ServerAuthenticationConverter authenticationConverter;

    private static final String[] JWT_AUTHENTICATION_SECURED_ENDPOINTS = {
            "/api/**"
    };

    private static final String[] WHITELIST_ENDPOINTS = {
            "/api/v1/auth/**",
            "/api/v1/blogs/categories"
    };

    @Bean
    SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity httpSecurity,
            @Qualifier("jwtAuthenticationManager") ReactiveAuthenticationManager authenticationManager) {

        AuthenticationWebFilter authenticationFilter = new AuthenticationWebFilter(authenticationManager);
        authenticationFilter.setServerAuthenticationConverter(authenticationConverter);
        authenticationFilter
                .setRequiresAuthenticationMatcher(
                        ServerWebExchangeMatchers.pathMatchers(JWT_AUTHENTICATION_SECURED_ENDPOINTS));

        httpSecurity
                .formLogin(FormLoginSpec::disable)
                .httpBasic(HttpBasicSpec::disable)
                .csrf(CsrfSpec::disable)
                .securityContextRepository(NoOpServerSecurityContextRepository.getInstance())
                .authorizeExchange(exchange -> exchange
                        .pathMatchers(WHITELIST_ENDPOINTS)
                        .permitAll()
                        .anyExchange()
                        .authenticated())
                .exceptionHandling(exceptionHandlingConfig -> exceptionHandlingConfig.authenticationEntryPoint(
                        (exchange, exception) -> {

                            System.out.println(exchange.getRequest().getURI());
                            System.out.println(exception.getMessage());
                            // Handle the security exception and write the response.

                            return Mono.empty();
                        }))
                .authenticationManager(authenticationManager)
                .addFilterAt(authenticationFilter, SecurityWebFiltersOrder.AUTHENTICATION);
        return httpSecurity.build();
    }
}
