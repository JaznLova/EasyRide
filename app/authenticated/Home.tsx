// import React, { useCallback, useMemo, useRef } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

// const Home = () => {
//   // ref
//   const bottomSheetRef = useRef<BottomSheet>(null);

//   // callbacks
//   const handleSheetChanges = useCallback((index: number) => {
//     console.log('handleSheetChanges', index);
//   }, []);

//   // renders
//   return (
//     <View style={styles.container}>
//       <BottomSheet
//         ref={bottomSheetRef}
//         onChange={handleSheetChanges}
//       >
//         <BottomSheetView style={styles.contentContainer}>
//           <Text>Awesome 🎉</Text>
//         </BottomSheetView>
//       </BottomSheet>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: 'grey',
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// export default Home;

import { View, Text } from 'react-native'
import React from 'react'

const home = () => {
  return (
    <View>
      <Text>home</Text>
    </View>
  )
}

export default home