package com.bookstore.onlinebookstore.controller;

import com.razorpay.*;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    @Value("${razorpay.key}")
    private String key;

    @Value("${razorpay.secret}")
    private String secret;

    @PostMapping("/create-order")
    public String createOrder(@RequestParam int amount) throws RazorpayException {

        RazorpayClient client = new RazorpayClient(key, secret);

        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", amount * 100); // paise
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", "txn_123456");

        Order order = client.orders.create(orderRequest);

        return order.toString();
    }
}