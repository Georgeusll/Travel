import React from "react"
import styled from "styled-components"
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/fa'
import { ImInsertTemplate } from 'react-icons/im'

export const StatsData = [
    {
        icon: (<GiEarthAmerica css = {`color: #047bf1; `}/>),
        title: "Over 100 Destinations",
        desc: "Travel across the city",
    
    },
    {
        icon: (<MdAirplanemodeActive  css = {`color: #f3a82e; `}/>),
        title: "Trips",
        desc: "Travel to over 100 unique places",
    
    },
    {
        icon: (<MdTimer  css = {`color: #f34f2e; `}/>),
        title: "Fast Support",
        desc: "Access to our support: 599 17 82 77",
    
    },
    {
        icon: (<FaMoneyCheck  css = {`color: #3af576; `}/>),
        title: "Best Deals",
        desc: "Best and objectively true prices",
    
    }
    ]
    