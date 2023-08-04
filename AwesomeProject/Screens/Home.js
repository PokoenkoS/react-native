import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { Button, View, Text } from "react-native";
import PostScreen from './PostScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen'

const Tabs = createBottomTabNavigator();

const Home = () => {

  return (
    <Tabs.Navigator>
 
 <Tabs.Screen 
 name ="PostScreen" 
 component={PostScreen}
 options={{
  title: "Публікації",
  headerStyle: {
    backgroundColor: "#FFFFFF",
  },
  tabBarShowLabel:false,
  headerTintColor: "#212121",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  headerRight: () => (
    <AntDesign name="logout" size={24} style={{
      paddingRight:20
    }}
     />),
   tabBarIcon: ({focused,color,size}) => {
    return(
      <View style={{
        backgroundColor:focused ? "#FF6C00" : "transparent",
        borderRadius : 30
      }}>
         <AntDesign name="windowso" size={24}/>
      </View>
    )
   }
}

}
 
 />
 <Tabs.Screen 
 name ="CreatePostsScreen" 
 component={CreatePostsScreen} 
 options={{
  title: "Створити Публікацію",
  headerStyle: {
    backgroundColor: "#FFFFFF",
    
  },
  tabBarShowLabel:false,
  headerTintColor: "#212121",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  
   tabBarIcon: ({focused,color,size}) => {
    return(
      <View 
      style={{
        backgroundColor:focused ? "#FF6C00" : "transparent",
        borderRadius : 30
      }}>
         <AntDesign name="pluscircleo" size={24}/>
      </View>
    )
   }
}

}
 />
 <Tabs.Screen 
 name ="ProfileScreen" 
 component={ProfileScreen}
 options={{
   headerStyle: {
    backgroundColor: "#FFFFFF",
  },
  tabBarShowLabel:false,
  headerTintColor: "#212121",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  
   tabBarIcon: ({focused,color,size}) => {
    return(
      <View
      style={{
        backgroundColor:focused ? "#FF6C00" : "transparent",
        borderRadius : 30
      }}
      >   
      <AntDesign name="user" size={24}/>
      </View>
    )
   }
}

}
 />
  </Tabs.Navigator>
       
  );
};



export default Home;