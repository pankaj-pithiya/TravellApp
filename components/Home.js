import { View, Text, Image, StyleSheet, FlatList, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import discoverData from '../assets/data/discoverData';
import activitiesData from '../assets/data/activitiesData';
import learnMoreData from '../assets/data/learnMoreData';
import colors from '../assets/colors/Colors';

const Home = ({ navigation }) => {

  const renderDiscoverData = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => navigation.navigate('DetailScreen', { item })}
        style={[styles.discoverDataitems, {
          marginLeft: item.id == 'discover-1' ? 20 : 0
        }]}>
        <ImageBackground
          style={styles.discoverDataImage}
          source={item.image}
        >
          <Text style={styles.discoverDataTitle}>{item.title}</Text>
          <View style={styles.discoverDataBottom}>
            <Image
              style={styles.dicoverDataLocationIcon}
              source={{
                uri: 'https://img.icons8.com/ios-filled/100/FFFFFF/marker.png'
              }}
            />
            <Text style={styles.discoverDataLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  const renderlearnMoreData = ({ item }) => (
    <View style={[styles.learnMoreDataItems, {
      marginLeft: item.id == 'learnMore-1' ? 20 : 0
    }]}>
      <ImageBackground
        style={styles.learnMoreDataImage}
        source={item.image}
      >
        <Text style={styles.learnMoreDataText}>{item.title}</Text>
      </ImageBackground>
    </View>
  )

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <Image style={styles.menuIcon} source={{ uri: 'https://img.icons8.com/ios-glyphs/90/000000/menu--v1.png' }} />
        <Image style={styles.profileIcon} source={require('../assets/images/person.png')} />
      </View>
      {/* Discover */}
      <View style={styles.discoverWrapper}>
        <Text style={styles.discoverTitle}>Discover</Text>
        <FlatList
          data={discoverCategoriesData}
          renderItem={({ item }) => (
            <Text style={[styles.discoverText, {
              marginLeft: item.id == 'discover-categories-1' ? 20 : 0,
              color: item.selected ? colors.orange : colors.gray
            }]}>{item.text}</Text>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          data={discoverData}
          renderItem={renderDiscoverData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* Activites */}
      <View style={styles.activitiesWrapper}>
        <Text style={styles.activitiesTitle}>Activites</Text>
        <FlatList
          data={activitiesData}
          renderItem={({ item }) => (
            <View style={[styles.activitiesDataItems, {
              marginLeft: item.id == 'activities-1' ? 20 : 0
            }]}>
              <Image style={styles.activitiesDataImage}
                source={item.image} />
              <Text style={styles.activitiesDataTitle}>{item.title}</Text>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* LearnMore */}
      <View style={styles.learnMoreWrapper}>
        <Text style={styles.learnMoreTitle}>Learn More</Text>
        <FlatList
          data={learnMoreData}
          renderItem={renderlearnMoreData}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  headerWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  menuIcon: {
    height: 35,
    width: 35
  },
  profileIcon: {
    height: 50,
    width: 50,
    borderRadius: 10
  },
  discoverWrapper: {
    marginTop: 20
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.black
  },
  discoverText: {
    marginTop: 20,
    marginRight: 30,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
  },
  discoverDataitems: {
    marginTop: 20,
    marginRight: 20,
    borderRadius: 20,
    overflow: 'hidden'
  },
  discoverDataImage: {
    height: 250,
    width: 170,
    justifyContent: 'flex-end',
    padding: 10
  },
  discoverDataTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: colors.white
  },
  discoverDataBottom: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: 'center'
  },
  dicoverDataLocationIcon: {
    height: 15,
    width: 15,
  },
  discoverDataLocationText: {
    marginLeft: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: colors.white
  },
  activitiesWrapper: {
    marginTop: 30
  },
  activitiesTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black
  },
  activitiesDataItems: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 20,
    marginTop: 20
  },
  activitiesDataImage: {
    height: 30,
    width: 30,
    resizeMode: 'contain'
  },
  activitiesDataTitle: {
    marginTop: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 10,
    color: colors.gray
  },
  learnMoreWrapper: {
    marginTop: 30,
    paddingBottom: 20
  },
  learnMoreTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black
  },
  learnMoreDataItems: {
    marginTop: 20,
    marginRight: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  learnMoreDataImage: {
    height: 180,
    width: 170,
    justifyContent: "flex-end",
    padding: 10
  },
  learnMoreDataText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white
  }
})

export default Home