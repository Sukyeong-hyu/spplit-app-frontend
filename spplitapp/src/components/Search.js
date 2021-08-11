import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as Font from 'expo-font';
import { cards } from './Category';
import NameCard from './NameCard';
import CardOverview from './CardOverview';

const TotalContainer = styled.View `
    width : 100%;
`;

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
    font-size: 18px;
`;

export default function Search({ cards }) {

    const [query, setQuery] = useState(null);

    
    // 검색 필터
    const results = cards.filter((result) => {

        console.log(query)

        const customTagCheck = (query, tag) => {
            let x = false;
            if (tag !== null) {
                if (tag.toLowerCase().includes(query.trim().toLowerCase())) {
                    x = true
                }
                else x = false
            }
            return x
        }
        

        if (query === null) {
            return result
        }
        
        else if (result.friend_card.name.toLowerCase().includes(query.trim().toLowerCase())||
            result.friend_card.job.toLowerCase().includes(query.trim().toLowerCase())||
            result.friend_card.phone.toLowerCase().includes(query.trim().toLowerCase())||
            result.friend_card.email.toLowerCase().includes(query.trim().toLowerCase())||
            result.friend_card.tag1.toLowerCase().includes(query.trim().toLowerCase())||
            result.friend_card.tag2.toLowerCase().includes(query.trim().toLowerCase())||
            result.friend_card.tag3.toLowerCase().includes(query.trim().toLowerCase())||
            result.notes.toLowerCase().includes(query.trim().toLowerCase())||customTagCheck(query.trim(), result.custom_tag1)||
            customTagCheck(query.trim(), result.custom_tag2)||customTagCheck(query.trim(), result.custom_tag3)||
            customTagCheck(query.trim(), result.custom_tag4)||customTagCheck(query.trim(), result.custom_tag5)) {
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

    )
}
