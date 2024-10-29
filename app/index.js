import { Link } from "expo-router";
import { Button, StyleSheet, Text, View , Image, TouchableOpacity} from "react-native";


export default function Page() {
  return (
    <View>
      <View style={styles.Image} >
      <Image source={require('../assets/images/Learning-cuate.png')}
      style={{width:300 , height:300}}
      />
      </View>
      <View style={styles.ContainerBtn}>
      <View style={styles.detailsContents}>
      <Text style={styles.textBoard}>Welcome to CodeX</Text>
      <View>
     <TouchableOpacity>
     <Link href="./SignUpPage/Signup" style={styles.Button}>Sign Up</Link>
     </TouchableOpacity>
      <View>
      <Text style={styles.or}>Or</Text>
      </View>
        </View>
      </View>
      <TouchableOpacity 
      onPress={()=>{
        const fname = "CodeApp"
        alert("This service is coming soon")
      }}
      style={styles.Social} >
       <View style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',gap:25}}>
       <Image source={require('../assets/images/google.jpeg')}
      style={{width:30, height:30}}
      />
      <Text style={{color:'grey'}}>Continue with Google</Text>
       </View>
      </TouchableOpacity>
      <View style={{display:'flex',marginTop:148,justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'grey'}}>Designed and Developed <Text style={{color:'#024CAA'}}>TechHub</Text></Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Image:{
    display:'flex',
    alignItems:'center'
  },
  ContainerBtn:{
    height:'100%',
    backgroundColor:'#E9ECEE',
    borderTopLeftRadius:40,
    borderTopRightRadius:40


  },
  or:{
    display:'flex',
    flexDirection:'column',
    color:'grey' , 
    marginTop:10, 
    textAlign:'center'
  },
Social:{
    backgroundColor:'white',
    width:300,
    marginTop:10,
    marginLeft:44,
    padding:10,
    borderRadius:15
   
},
  detailsContents:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop:60


  },

  textBoard:{
    fontSize:25,
    textAlign:'center',
    fontWeight:'600'

  },
  Button :{
    backgroundColor:'#024CAA',
    width:300,
    textAlign:'center',
    padding:15,
    marginTop:30,
    color:'white',
    borderRadius:15
  }

});
