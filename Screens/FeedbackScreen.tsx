import {ErrorMessage, Formik} from 'formik';
import React, {useEffect} from 'react';
import {
  Button,
  ScrollView,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import Screen from '../Components/Screen';
import AppText from '../Components/AppText';
import AppTextInput from '../Components/AppTextInput';
import Header from '../Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {displayMsg} from '../services/utility';
import * as yup from 'yup';
const FeedbackScreen = ({navigation}) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    rating: yup.number().required('Rating is required'),
  });
  const storeData = async data => {
    console.log(data);
    try {
      await AsyncStorage.setItem('feedbackData', JSON.stringify(data));
      displayMsg('Data saved successfully', 'success');
    } catch (error) {
      // Error saving data
    }
  };
  const retrieveData = async () => {
    try {
      const data = await AsyncStorage.getItem('feedbackData');
      console.log(data);
    } catch (error) {
      return null;
      // Error retrieving data
    }
  };

  return (
    <Screen>
      <Header onPress={navigation.toggleDrawer} title="Feedback Form" />
      <ScrollView style={{marginTop: 16}}>
        <Formik
          validationSchema={validationSchema}
          initialValues={{name: '', email: '', feedback: '', rating: 5}}
          onSubmit={values => storeData(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
          }) => (
            <View>
              <AppText>Name</AppText>
              <AppTextInput
                backgroundStyle={{marginBottom: 0}}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('email')}
                value={values.name}
                placeholder="Name"
              />
              <AppText style={{color: 'red'}}>
                <ErrorMessage name="name" />
              </AppText>
              <AppText>Email</AppText>
              <AppTextInput
                backgroundStyle={{marginBottom: 0}}
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="Enter Email"
              />
              <AppText style={{color: 'red'}}>
                <ErrorMessage name="email" />
              </AppText>
              <AppText>Feedback</AppText>
              <AppTextInput
                backgroundStyle={{marginBottom: 0}}
                style={{paddingVertical: 4, color: 'black'}}
                multiline={true}
                onChangeText={handleChange('feedback')}
                value={values.feedback}
                placeholder="Feedback"
              />

              <AppText>Rating</AppText>
              <AirbnbRating
                count={5}
                showRating={false}
                defaultRating={5}
                size={32}
                onFinishRating={val => setFieldValue('rating', val)}
              />
              <AppText style={{color: 'red'}}>
                <ErrorMessage name="rating" />
              </AppText>
              <TouchableOpacity
                style={{
                  backgroundColor: 'green',
                  paddingVertical: 8,
                  borderRadius: 16,
                  marginTop: 32,
                }}
                onPress={handleSubmit}>
                <AppText style={{alignSelf: 'center'}}>Submit</AppText>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </Screen>
  );
};

export default FeedbackScreen;
