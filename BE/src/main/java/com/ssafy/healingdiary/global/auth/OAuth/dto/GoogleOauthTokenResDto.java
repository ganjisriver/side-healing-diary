package com.ssafy.healingdiary.global.auth.OAuth.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Getter
public class GoogleOauthTokenResDto {

    public String email;

    public String name;
    public String picture;

}
