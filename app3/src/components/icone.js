import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

const imgPedra = require('../../imgs/pedra.png');
const imgPapel = require('../../imgs/papel.png');
const imgTesoura = require('../../imgs/tesoura.png');

class Icone extends Component {

    render() {
        if (this.props.escolha === 'pedra') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={imgPedra} />
                </View>
            );
        } else if (this.props.escolha === 'tesoura') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={imgTesoura} />
                </View>
            );
        } else if (this.props.escolha === 'papel') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={imgPapel} />
                </View>
            );
        }
        return false;
    }
}

const styles = StyleSheet.create({
    txtJogador: {
        alignItems: 'center',
        fontSize: 20,
    },

    icone: {
        alignItems: 'center',
    }
});

export default Icone;
