import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { Button, View, Text, Pressable } from "react-native";
import PostScreen from './PostScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen'
import { useDispatch } from "react-redux";
import { logOutUser } from "../redux/auth/operations";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const dispatch = useDispatch();

  const handleLogOut = ()=> {
    dispatch(logOutUser());
  }

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
    fontWeight: 500,
    paddingLeft: 148,
    fontSize: 17,
    textAlign: "center",
    lineHeight: 22,
  },
  headerRight: () => (
    <Pressable onPress={handleLogOut}>
    <AntDesign name="logout" size={24} style={{
      paddingRight:20
    }}
     />
     </Pressable>),
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
    fontWeight: 500,
    paddingLeft: 98,
    fontSize: 17,
    textAlign: "center",
    lineHeight: 22,
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
    fontWeight: 500,
    paddingLeft: 148,
    fontSize: 17,
    textAlign: "center",
    lineHeight: 22,
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