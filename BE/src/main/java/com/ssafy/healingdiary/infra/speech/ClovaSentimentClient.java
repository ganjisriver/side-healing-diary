package com.ssafy.healingdiary.infra.speech;

import com.google.gson.Gson;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicHeader;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ClovaSentimentClient {

    @Value("${clova.sentiment.client-id}")
    private String CLIENT_ID;
    @Value("${clova.sentiment.client-secret}")
    private String SECRET;

    private Header[] HEADERS = new Header[] {
        new BasicHeader("Content-Type", "application/json"),
        new BasicHeader("X-NCP-APIGW-API-KEY-ID", CLIENT_ID),
        new BasicHeader("X-NCP-APIGW-API-KEY", SECRET),
    };

    private CloseableHttpClient httpClient = HttpClients.createDefault();
    private Gson gson = new Gson();

    public String analyze(String text){
        HttpPost httpPost = new HttpPost("https://naveropenapi.apigw.ntruss.com/sentiment-analysis/v1/analyze");
        httpPost.setHeaders(HEADERS);
        Map<String, Object> body = new HashMap<>();
        body.put("content", text);
        body.put("config.negativeClassification", true);
        StringEntity httpEntity = new StringEntity(gson.toJson(body), ContentType.APPLICATION_JSON);
        httpPost.setEntity(httpEntity);

        try (final CloseableHttpResponse httpResponse = httpClient.execute(httpPost)) {
            final HttpEntity entity = httpResponse.getEntity();
            return EntityUtils.toString(entity, StandardCharsets.UTF_8);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
