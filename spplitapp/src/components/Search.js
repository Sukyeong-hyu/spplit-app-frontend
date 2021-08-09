import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as Font from 'expo-font';
<<<<<<< HEAD
=======
import { cards } from './Category';
import NameCard from './NameCard';
import CardOverview from './CardOverview';

const TotalContainer = styled.View `
    width : 100%;
`;
>>>>>>> 0bda17d1682541d488c00d163f12dd076825d688

const SearchbarContainer = styled.View`
    height: 60px;
    position: absolute;
    width: 100%;
    top: 100px;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

const Searchbar = styled.TextInput `
    width: 88%;
    height: 70%;
    background-color: #f2f2f2;
    border-radius: 7px;
    padding-left: 15px;
    font-size: 20px;
`;

<<<<<<< HEAD
export default function Search() {
    const [text, setText] = useState('');
    return (
        <SearchbarContainer>
            <Searchbar />
        </SearchbarContainer>
=======
export default function Search({ cards }) {

    const [query, setQuery] = useState(null);

    
    // 검색 필터
    const results = cards.filter((result) => {

        console.log(query)

        if (query === null) {
            return result
        }
        
        else if (result.custom_tag1.toLowerCase().includes(query.trim().toLowerCase())||
            result.custom_tag2.toLowerCase().includes(query.trim().toLowerCase())||
            result.custom_tag3.toLowerCase().includes(query.trim().toLowerCase())||
            result.custom_tag4.toLowerCase().includes(query.trim().toLowerCase())||
            result.custom_tag5.toLowerCase().includes(query.trim().toLowerCase())||
            result.notes.toLowerCase().includes(query.trim().toLowerCase())||
            result.friend_card.name.toLowerCase().includes(query.trim().toLowerCase())||
            result.friend_card.job.toLowerCase().includes(query.trim().toLowerCase())||
            result.friend_card.phone.toLowerCase().includes(query.trim().toLowerCase())||
            result.friend_card.email.toLowerCase().includes(query.trim().toLowerCase())||
            result.friend_card.tag1.toLowerCase().includes(query.trim().toLowerCase())||
            result.friend_card.tag2.toLowerCase().includes(query.trim().toLowerCase())||
            result.friend_card.tag3.toLowerCase().includes(query.trim().toLowerCase())) {
                return result
            }
    })


    return (
        <TotalContainer>
            <SearchbarContainer>
                <Searchbar placeholder="Contact your partner" value={query} onChangeText={text => setQuery(text)}/> 
            </SearchbarContainer>
            <CardOverview results={results} />
        </TotalContainer>

>>>>>>> 0bda17d1682541d488c00d163f12dd076825d688
    )
}
