//android : 415669538976-39b162e2oa4dhmlgsr4lvleitpl8d836.apps.googleusercontent.com

import { View , Text, StyleSheet, Image } from "react-native";

function SignUp (){
    return(
        <View>
           <View>
            <View>
               <View style={styles.Image}>
               <Image source={require('../../assets/images/login-cuate.png')}
                 style={{width:300 , height:300}}
                />
               </View>
               <View style={styles.ContainerTop}> 
                <Text style={styles.SignUptext}>
                    SignUp to Codex
                </Text>
               </View>
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
      ContainerTop:{
        height:'100%',
        backgroundColor:'#E9ECEE',
        borderTopLeftRadius:40,
        borderTopRightRadius:40
      },
      SignUptext:{
        fontSize:20,
        marginTop:30,
        textAlign:'center',
        fontWeight:'700',
        fontFamily:'Poppins'
      }

});



export default SignUp