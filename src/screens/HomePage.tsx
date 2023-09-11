import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomePage = ({ navigation }: any) => {
    // Define a function to navigate to the QR code scanning screen when the button is pressed
    const navigateToQRScanner = () => {
        navigation.navigate('QRScanner'); // 'QRScanner' should match the screen name you define for the QR code scanning screen
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>QR Code Scanner</Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
                {/* <Image
                    source={require('./path-to-your-app-logo.png')} // Replace with your app's logo image
                    style={styles.logo}
                /> */}
                <Text style={styles.title}>Welcome to QR Code Scanner</Text>
                <Text style={styles.description}>
                    Scan a QR Code to get started!
                </Text>
                <TouchableOpacity
                    onPress={navigateToQRScanner}
                    style={[styles.button, { backgroundColor: '#007bff' }]} // Theme color for the button
                >
                    <Text style={styles.buttonText}>Scan QR Code</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        backgroundColor: '',
        padding: 20,
        alignItems: 'center',
    },
    headerText: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default HomePage;
