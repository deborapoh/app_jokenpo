import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

class app3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            escolhaUsuario: '',
            escolhaComputador: '',
            resultado: ''
        };
    }

    jokenpo(escolhaUsuario) {
        // Inicializacao de variaveis
        let resultado = '';
        let escolhaComputador = '';
        // Gera uma opcao aleatoria para o computador
        const numeroAleatorio = Math.floor(Math.random() * 3);

        // Seta a opcao do usuario
        this.setState({ escolhaUsuario });

        // Atribui os nomes dependendo da opcao gerada acima
        if (numeroAleatorio === 0) {
            escolhaComputador = 'pedra';
        } else if (numeroAleatorio === 1) {
            escolhaComputador = 'tesoura';
        } else {
            escolhaComputador = 'papel';
        }

        // Logica de quem ganhou
        if (escolhaComputador === 'pedra') {
            if (escolhaUsuario === 'pedra') {
                resultado = 'Empatou';
            } else if (escolhaUsuario === 'papel') {
                resultado = 'Você ganhou!!!';
            } else {
                resultado = 'Você perdeu...';
            }
        } else if (escolhaComputador === 'papel') {
            if (escolhaUsuario === 'pedra') {
                resultado = 'Você perdeu...';
            } else if (escolhaUsuario === 'papel') {
                resultado = 'Empatou';
            } else {
                resultado = 'Você ganhou!!!';
            }
        } else if (escolhaUsuario === 'pedra') {
                resultado = 'Você ganhou!!!';
            } else if (escolhaUsuario === 'papel') {
                resultado = 'Você perdeu...';
            } else {
                resultado = 'Empatou';
            }

        this.setState({ resultado, escolhaComputador });
    }

    render() {
        return (<View style={styles.fundo}>

            <Topo />

            <View style={styles.painelAcoes}>

                <View style={styles.btnEscolha}>
                    <Button
                        title='pedra'
                        onPress={
                            () => { this.jokenpo('pedra'); }
                        }
                    />
                </View>

                <View style={styles.btnEscolha}>
                    <Button
                        title='tesoura'
                        onPress={
                            () => { this.jokenpo('tesoura'); }
                        }
                    />
                </View>

                <View style={styles.btnEscolha}>
                    <Button
                        title='papel'
                        onPress={
                            () => { this.jokenpo('papel'); }
                        }
                    />
                </View>

            </View>

            <View style={styles.palco}>
                <Text style={styles.txtResultado}>{this.state.resultado}</Text>

                <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
                <Icone escolha={this.state.escolhaUsuario} jogador='Você' />

            </View>

        </View>);
    }
}

const styles = StyleSheet.create({
    btnEscolha: {
        width: 90
    },

    painelAcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },

    palco: {
        alignItems: 'center',
        marginTop: 10
    },

    txtResultado: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        height: 50
    },

    fundo: {
        backgroundColor: 'white',
        flex: 1
    }

});

AppRegistry.registerComponent('app3', () => app3);
