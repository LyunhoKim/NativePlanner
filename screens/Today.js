import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Pie from 'react-native-pie';

export default class Today extends Component {
  constructor(props) {
    super(props);
    console.log('TodayScreen에서 navigation 접근: ', props);
  }

  render() {
    console.log('AgendaScreen에서 넘어온 파라미터 접근: ', this.props.route);
    return (
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Pie
          radius={80}
          innerRadius={75}
          sections={[
            {
              percentage: 60,
              color: '#FA5858',
            },
          ]}
          backgroundColor="#ddd"
        />
        <View style={styles.gauge}>
          <Text style={styles.gaugeText}>60% </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
});
