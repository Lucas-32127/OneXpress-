import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function App(){
  const [code, setCode] = useState('');
    return (
        <ScrollView style={styles.container}>
              <View style={styles.header}>
                      <Text style={styles.logo}>OneXpress 🚀</Text>
                              <Text style={styles.sub}>Entregas rápidas em Luanda</Text>
                                    </View>

                                          <View style={styles.card}>
                                                  <Text style={styles.title}>Rastrear encomenda</Text>
                                                          <TextInput 
                                                                    placeholder="Digite o código: ONEX-1234"
                                                                              value={code}
                                                                                        onChangeText={setCode}
                                                                                                  style={styles.input}
                                                                                                          />
                                                                                                                  <TouchableOpacity style={styles.btn} onPress={()=>alert('Rastreando: '+code)}>
                                                                                                                            <Text style={styles.btnText}>Rastrear Agora</Text>
                                                                                                                                    </TouchableOpacity>
                                                                                                                                          </View>

                                                                                                                                                <View style={styles.services}>
                                                                                                                                                        <Text style={styles.title}>Serviços</Text>
                                                                                                                                                                <View style={styles.grid}>
                                                                                                                                                                          <View style={styles.item}><Text>📦 Express</Text><Text style={styles.small}>24h</Text></View>
                                                                                                                                                                                    <View style={styles.item}><Text>🏍️ Moto</Text><Text style={styles.small}>2h</Text></View>
                                                                                                                                                                                              <View style={styles.item}><Text>🚚 Carga</Text><Text style={styles.small}>Grande</Text></View>
                                                                                                                                                                                                      </View>
                                                                                                                                                                                                            </View>

                                                                                                                                                                                                                  <Text style={styles.footer}>OneXpress MVP - Porta 8081 OK ✅</Text>
                                                                                                                                                                                                                      </ScrollView>
                                                                                                                                                                                                                        );
                                                                                                                                                                                                                        }

                                                                                                                                                                                                                        const styles = StyleSheet.create({
                                                                                                                                                                                                                          container:{flex:1, backgroundColor:'#f5f7fb'},
                                                                                                                                                                                                                            header:{backgroundColor:'#111827', padding:40, paddingTop:60, alignItems:'center'},
                                                                                                                                                                                                                              logo:{color:'#fff', fontSize:32, fontWeight:'bold'},
                                                                                                                                                                                                                                sub:{color:'#9ca3af', marginTop:8},
                                                                                                                                                                                                                                  card:{backgroundColor:'#fff', margin:20, padding:20, borderRadius:16, elevation:3},
                                                                                                                                                                                                                                    title:{fontSize:18, fontWeight:'bold', marginBottom:12},
                                                                                                                                                                                                                                      input:{borderWidth:1, borderColor:'#e5e7eb', borderRadius:12, padding:14, marginBottom:12},
                                                                                                                                                                                                                                        btn:{backgroundColor:'#2563eb', padding:16, borderRadius:12, alignItems:'center'},
                                                                                                                                                                                                                                          btnText:{color:'#fff', fontWeight:'bold'},
                                                                                                                                                                                                                                            services:{margin:20},
                                                                                                                                                                                                                                              grid:{flexDirection:'row', gap:10},
                                                                                                                                                                                                                                                item:{backgroundColor:'#fff', flex:1, padding:20, borderRadius:12, alignItems:'center'},
                                                                                                                                                                                                                                                  small:{color:'#6b7280', marginTop:4},
                                                                                                                                                                                                                                                    footer:{textAlign:'center', color:'#9ca3af', margin:30}
                                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                    