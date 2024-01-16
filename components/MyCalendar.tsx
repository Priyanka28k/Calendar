import React, {useState, useMemo} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Calendar, CalendarList} from 'react-native-calendars';

const CustomCalendar = (props) => {
  const currentDate = new Date(); // Get the current date
  const initDateCalendar = currentDate.toISOString().split('T')[0]; // Convert to 'YYYY-MM-DD' format for Calendar
  const initDateCalendarList = currentDate.toISOString().split('T')[0]; // Convert to 'YYYY-MM-DD' format for CalendarList
  const [selected, setSelected] = useState(initDateCalendar);
  const [selectedList, setSelectedList] = useState(initDateCalendarList);
  const marked = useMemo(
    () => ({
      [selected]: {
        selected: true,
        selectedColor: '#55E2E9',
        selectedTextColor: 'yellow',
      },
      [selectedList]: {
        selected: true,
        selectedColor: 'orange',
        selectedTextColor: 'black',
      },
    }),
    [selected, selectedList],
  );

  return (
    <View>
      {/* Calendar */}
      <View style={{display: props.isCalendarVisible ? 'flex' : 'none'}}>
        <Calendar
          current={selected}
          markedDates={marked}
          onDayPress={day => {
            setSelected(day.dateString);
            props.onDaySelect && props.onDaySelect(day);
          }}
          style={{
            borderRadius: 5,
            elevation: 5,
          }}
          theme={{
            'stylesheet.calendar.header': {
              dayTextAtIndex0: {
                color: 'red',
              },
              dayTextAtIndex6: {
                color: '#55E2E9',
              },
            },
          }}
        />
      </View>
      {/* CalendarList */}
      <View style={{display: !props.isCalendarVisible ? 'flex' : 'none'}}>
        <CalendarList
          current={selectedList}
          markedDates={marked}
          onDayPress={day => {
            setSelectedList(day.dateString);
            props.onDaySelect && props.onDaySelect(day);
          }}
          style={{
            borderRadius: 5,
            elevation: 5,
          }}
          theme={{
            'stylesheet.calendar.header': {
              dayTextAtIndex0: {
                color: 'red',
              },
              dayTextAtIndex6: {
                color: '#55E2E9',
              },
            },
          }}
        />
      </View>
    </View>
  );
}

const MyCalendar = () => {
  const [isCalendarVisible, setCalendarVisibility] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <CustomCalendar
        isCalendarVisible={isCalendarVisible}
        onDaySelect={day => console.log(`Date selected: ${day.dateString}`)}
      />
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setCalendarVisibility(!isCalendarVisible)}>
        <Text>Show Calendar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toggleButton: {
    padding: 10,
    backgroundColor: '#55E2E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default MyCalendar
