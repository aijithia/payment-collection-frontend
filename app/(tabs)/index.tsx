import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";
import { API_BASE_URL } from "../../constants/api";

export default function Home() {
  const [accountNumber, setAccountNumber] = useState("");
  const [customer, setCustomer] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState("");

  const fetchCustomer = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/customers`);
      const foundCustomer = response.data.find(
        (c) => c.account_number === accountNumber
      );
      if (foundCustomer) {
        setCustomer(foundCustomer);
      } else {
        alert("Customer not found");
        setCustomer(null);
      }
    } catch (error) {
      console.error(error);
      alert("Error fetching data");
    }
  };

  const makePayment = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/payments`,
        {  
          account_number: accountNumber,
          payment_amount: paymentAmount
        }
      );
      alert("Payment Successful!");
      setPaymentAmount("");
    } catch (error) {
      console.error(error);
      alert("Payment failed");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Collection App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Account Number"
        value={accountNumber}
        onChangeText={setAccountNumber}
      />
      <Button title="Get Loan Details" onPress={fetchCustomer} />

      {customer && (
        <View style={styles.card}>
          <Text>Account: {customer.account_number}</Text>
          <Text>Issue Date: {new Date(customer.issue_date).toLocaleDateString()}</Text>          <Text>Interest Rate: {customer.interest_rate}%</Text>
          <Text>Tenure: {customer.tenure} months</Text>
          <Text>EMI Due: ₹{customer.emi_due}</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Payment Amount"
            value={paymentAmount}
            onChangeText={setPaymentAmount}
          />
          <Button title="Pay EMI" onPress={makePayment} />
        </View>
      )}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  card: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#f2f2f2",
    borderRadius: 8
  }
});