import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import styled from 'styled-components/native';
import { results } from './Search';
import CardOverview from './CardOverview';
import axios from 'axios';
import Category, { categoryBar, setCategoryBar, clicked, setClicked } from './Category';
import Search, { query, setQuery } from './Search';


export default function CardList() {

    const [cardList, setCardList] = useState([]);

    // const [clicked, setClicked] = useState(0);
    // const [categoryBar, setCategoryBar] = useState([]);

    // const [query, setQuery] = useState(null);

    // 토큰 획득
    USER_TOKEN = "657891e7e05b426a39198353e3c19778600cdc4e"
    const AuthStr = "Token ".concat(USER_TOKEN)

        
    // 카드 획득
    useEffect(() => {
        const url = "https://spplit.herokuapp.com/card";
        axios.get(url, { headers : { Authorization: AuthStr} })
        .then(function(response) {
            setCardList(response.data);
            console.log("Card-data loading success");
        })
        .catch(function(error) {
            console.log("Card-data loading failure");
        })
    }, [])
    

    return (
        <Category cardList={cardList}/>
    )
}