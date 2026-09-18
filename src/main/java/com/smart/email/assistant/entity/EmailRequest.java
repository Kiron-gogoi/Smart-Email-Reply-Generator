package com.smart.email.assistant.entity;


import lombok.*;

@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class EmailRequest {
    private String emailContent;
    private String tone;

    // Constructor
//    public EmailRequest() {}
//
//    public EmailRequest(String emailContent, String tone) {
//        this.emailContent = emailContent;
//        this.tone = tone;
//    }
//
//    // Getters and setters
//    public String getEmailContent() {
//        return emailContent;
//    }
//
//    public void setEmailContent(String emailContent) {
//        this.emailContent = emailContent;
//    }
//
//    public String getTone() {
//        return tone;
//    }
//
//    public void setTone(String tone) {
//        this.tone = tone;
//    }
}
