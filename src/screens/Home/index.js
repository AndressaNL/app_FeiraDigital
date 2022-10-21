import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {Card} from '../../components/Card';

import {api} from '../../Services/Api';
import {Container} from './styles';

const {width} = Dimensions.get('window');

export function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get('/products').then(response => {
      setProducts(response.data);
      console.log(response.data);
    });
    setLoading(false);
  }, []);

  return (
    <Container>
      <ScrollView
        nestedScrollEnabled={true}
        style={{width: '100%'}}
        scrollEventThrottle={16}>
        <SafeAreaView style={{flex: 1, paddingTop: 20}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              paddingHorizontal: 15,
              color: '#343F4B',
            }}>
            Destaques
          </Text>
          <View style={{height: 130, marginTop: 10}}>
            <ScrollView
              snapToAlignment={'start'}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              decelerationRate="fast">
              <View style={{height: 120, height: 120, paddingLeft: 15}}>
                <View style={{flex: 2}}>
                  <Image
                    source={require('../../assets/slider1.jpeg')}
                    style={{
                      flex: 1,
                      width: width * 0.7 - 20,
                      height: width / 9,
                      marginBottom: 10,
                      borderRadius: 12,
                      resizeMode: 'cover',
                    }}
                  />
                </View>
              </View>
              <View style={{height: 120, height: 120, paddingHorizontal: 5}}>
                <View style={{flex: 2}}>
                  <Image
                    source={require('../../assets/slider2.jpeg')}
                    style={{
                      flex: 1,
                      width: width * 0.8 - 20,
                      height: width / 9,
                      marginBottom: 10,
                      borderRadius: 12,
                      resizeMode: 'cover',
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  height: 120,
                  height: 120,
                  paddingHorizontal: 5,
                  paddingRight: 15,
                }}>
                <View style={{flex: 2}}>
                  <Image
                    source={require('../../assets/slider3.jpeg')}
                    style={{
                      flex: 1,
                      width: width * 0.7 - 20,
                      height: width / 9,
                      marginBottom: 10,
                      borderRadius: 12,
                      resizeMode: 'cover',
                    }}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              paddingHorizontal: 15,
              color: '#343F4B',
            }}>
            Frutas, Verduras e Legumes
          </Text>

          <View style={{marginLeft: 15, marginTop: 10, marginRight: 15}}>
            {loading ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  marginTop: 150,
                }}>
                <ActivityIndicator size="large" color="#000" />
              </View>
            ) : (
              <ScrollView horizontal={true} style={{width: '100%'}}>
                <FlatList
                  columnWrapperStyle={{justifyContent: 'space-between'}}
                  numColumns={2}
                  contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                  }}
                  data={products}
                  renderItem={({item}) => <Card products={item} />}
                />
              </ScrollView>
            )}
          </View>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}
