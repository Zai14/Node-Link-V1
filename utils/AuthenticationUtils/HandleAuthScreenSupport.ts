import { Alert, Linking } from "react-native";

export const handleSupport = async () => {
  const recipients = ['Zaidshabir67@gmail.com', 'Zaidshabir67@icloud.com'];
  const subject = encodeURIComponent('Support Request');
  const body = encodeURIComponent('Hello NodeLink developers,\n\nI need help with...');
  const mailtoURL = `mailto:${recipients.join(',')}?subject=${subject}&body=${body}`;

  try {
    const supported = await Linking.canOpenURL(mailtoURL);
    if (supported) {
          Alert.alert(
            "Contact Support",
            "Press Yes to send email to Support",
            [
              { text: "Cancel", style: "cancel" },
              { text: "Yes", onPress: () => Linking.openURL(mailtoURL) }, // opens useers email app to send email to us
            ]
          );
      
    } else {
      Alert.alert('Error', 'Email app is not available');
    }
  } catch (error) {
    console.error("Error handling the support request: ", error);
    Alert.alert('Error', 'An error occurred while trying to open the email app');
  }
};
