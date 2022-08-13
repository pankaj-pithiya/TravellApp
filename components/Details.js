import { View, Text, ImageBackground, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../assets/colors/Colors';

const Details = ({ route, navigation }) => {
  const item = route.params.item;
  return (
    <View style={styles.container}>
      {/* Image */}
      <ImageBackground style={styles.backgroundImage}
        source={item.imageBig}
      >
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image
            style={styles.backIcon}
            source={{
              uri: 'https://img.icons8.com/ios-glyphs/90/FFFFFF/chevron-left.png'
            }}
          />
        </TouchableOpacity>
        <View style={styles.locationInfoWrapper}>
          <Text style={styles.locationTitle}>
            {item.title}
          </Text>
          <View style={styles.locationInfoBottom}>
            <Image
              style={styles.locationIcon}
              source={{
                uri: 'https://img.icons8.com/ios-filled/100/FFFFFF/marker.png'
              }}
            />
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
      {/* Description */}
      <View style={styles.descriptionWrapper}>
        <Text style={styles.descriptionTitle}>Discription</Text>
        <Text style={styles.descriptionText}
          numberOfLines={3}
        >{item.description}</Text>
        <View style={styles.descriptionBottom}>
          <View style={styles.infoWrapper}>
            <Text style={styles.infoTitle}>PRICE</Text>
            <Text style={styles.infoDetail}>${item.price}
              <Text style={styles.infoTitle}>/person</Text></Text>
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.infoTitle}>RATING</Text>
            <Text style={styles.infoDetail}>{item.rating}
              <Text style={styles.infoTitle}>/s</Text></Text>
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.infoTitle}>DURATION</Text>
            <Text style={styles.infoDetail}>{item.duration}
              <Text style={styles.infoTitle}> hours</Text> </Text>
          </View>
        </View>
      </View>
      {/* Button */}
      <TouchableOpacity
        onPress={() => alert('Press')}
        style={styles.button}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  backgroundImage: {
    height: Dimensions.get('window').height * 0.6,
    resizeMode: "contain",
    padding: 20,
    justifyContent: "space-between",
  },
  backIcon: {
    marginTop: 10,
    height: 30,
    width: 30,
    resizeMode: 'contain'
  },
  locationInfoWrapper: {
    marginBottom: 50
  },
  locationTitle: {
    fontFamily: "Lato-Bold",
    fontSize: 32,
    color: colors.white
  },
  locationInfoBottom: {
    marginTop: 7,
    flexDirection: 'row',
    alignItems: 'center'
  },
  locationIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginRight: 5
  },
  locationText: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: colors.white
  },
  descriptionWrapper: {
    marginTop: -60,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20
  },
  descriptionTitle: {
    marginTop: 30,
    fontFamily: 'Lato-Bold',
    fontSize: 22,
    color: colors.black
  },
  descriptionText: {
    marginTop: 20,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.gray
  },
  descriptionBottom: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoWrapper: {},
  infoTitle: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: colors.gray,
  },
  infoDetail: {
    marginTop: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.orange
  },
  button: {
    marginTop: 30,
    backgroundColor: colors.orange,
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white
  },
})

export default Details