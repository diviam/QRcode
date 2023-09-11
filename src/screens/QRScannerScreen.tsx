// // In QRScannerScreen.js
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import { request, PERMISSIONS } from 'react-native-permissions';

// const QRScannerScreen = () => {
//     const [cameraPermission, setCameraPermission] = useState(null);

//     useEffect(() => {
//         requestCameraPermission();
//     }, []);

//     const requestCameraPermission = async () => {
//         const permissionStatus: any = await request(PERMISSIONS.ANDROID.CAMERA);

//         setCameraPermission(permissionStatus);
//     };

//     const handleBarcodeRead = (barcodes: any) => {
//         if (barcodes.length > 0) {
//             const qrCodeData = barcodes[0].data;
//             // Handle the QR code data (e.g., navigate to a specific screen)
//             // For now, we'll log it to the console
//             console.log('QR Code Data:', qrCodeData);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             {cameraPermission === 'granted' ? (
//                 <RNCamera
//                     style={styles.camera}
//                     type={RNCamera.Constants.Type.back}
//                     flashMode={RNCamera.Constants.FlashMode.off}
//                     onBarCodeRead={handleBarcodeRead}
//                 />
//             ) : (
//                 <Text>Camera permission denied. Please grant camera access in your device settings.</Text>
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     camera: {
//         flex: 1,
//         width: '100%',
//     },
// });

// export default QRScannerScreen;
