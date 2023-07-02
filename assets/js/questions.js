const quiz = [
    {
        numb: 1,
        question: "Which statement accurately describes the global surface temperature difference between the period 2001 - 2020 and 1850 - 1900?",
        answer: "1.10°C",
        options: [
            "1.10°C",
            "1.59°C",
            "0.88°C",
            "0.95°C"
        ]
    },
    {
        numb: 2,
        question: "Which human-caused activities contributed most to the global surface temperature increase over the period 2001 - 2020?",
        answer: "Cities, settlements and infrastructure(Inland flooding and associated damages, Flood / storm induced damages in coastal areas, Damages to key economic sectors, Damages to infrastructure). ",
        options: [
            "Biodiversity and ecosystems (Terrestrial ecosystems, Freshwater ecosystems, Ocean ecosystems)",
            "Water availability and food production (Physical water availability, Agriculture / crop production, Fisheries yields and aquaculture production, Animal and livestock health and productivity)",
            "Health and well-being (Infectious diseases, Mental health, Displacement, Heat, malnutrition and harm from wildfire)",
            "Cities, settlements and infrastructure (Inland flooding and associated damages, Flood / storm induced damages in coastal areas, Damages to key economic sectors, Damages to infrastructure)."
        ]
    },
    {
        numb: 3,
        question: "Which limitation is the most significant in creating adaptation gaps across sectors and regions?",
        answer: "All options are correct!",
        options: [
            "Small - scale farmers and households along some low-lying coastal areas",
            "Financial, governance, institutional and policy constraints",
            "Some tropical, coastal, polar and mountain ecosystems have reached hard adaptation limits",
            "Limited resources, lack of private sector and citizen engagement",
            "Insufficient mobilization of finance(including for research)",
            "Low climate literacy",
            "Lack of political commitment, limited research and/or slow and low uptake of adaptation science, and low sense of urgency."
        ]
    },
    {
        numb: 4,
        question: "Which limitation is the most significant in creating adaptation gaps across sectors and regions?",
        answer: "Significant shortfalls for the levels needed to limit warming to below 2°C or to 1.5°C across all sectors and regions",
        options: [
            "The adoption of low-emission technologies lags in most developing countries",
            "Growth and expansion of climate finance flows slowing since 2018",
            "Public and private finance flows for fossil fuels outweighing those for climate adaptation and mitigation",
            "Significant shortfalls for the levels needed to limit warming to below 2°C or to 1.5°C across all sectors and regions",
        ]
    },
    {
        numb: 5,
        question: "The AR6 study on 30,652 species of birds, mammals, reptiles, amphibians, marine fish, benthic marine invertebrates, krill, cephalopods, corals, and seagrasses, concludes a 60-100% predicted risk of species losses at 3-4°C for which selection of regions?",
        answer: "Caribbean, Southern Europe, Northern Africa, South Asia, South East Asia and Northern Australia",
        options: [
            "North America, Northern Europe, Russia, Southern South America and Southern Australia",
            "Caribbean, Southern Europe, Northern Africa, South Asia, South East Asia and Northern Australia"
        ]
    },
    {
        numb: 6,
        question: "Considering the food production impacts, at 3c and above, which is the most projected loss?",
        answer: "Maize yield",
        options: [
            "Maize yield",
            "Fisheries yield"
        ]
    },
    {
        numb: 7,
        question: "With our land - based systems, what are the highest risks associated first at 2.5c ? Select any applicable:",
        answer: "Permafrost degradation and Biodiversity loss",
        options: [
            "Wildfire damage",
            "Permafrost degradation",
            "Biodiversity loss",
            "Dryland water scarcity",
            "Tree mortality",
            "Carbon loss"
        ]
    },
    {
        numb: 8,
        question: "What is the highest risk associated with our ocean/coastal ecosystems, considering all levels of increased temperature?",
        answer: "Warm-water corals",
        options: [
            "Warm-water corals",
            "Kelp forests",
            "Seagrass meadows",
            "Epipelagic zone(upper open ocean, affecting sunlight for algae to thrive)",
            "Rocky shores",
            "Salt marshes",
        ]
    },
    {
        numb: 9,
        question: "As far as the net global greenhouse gas emissions are considered across the Nationally Determined Contributions, what is the current projection if we do not reduce these further?",
        answer: "Warming of 3.2°C",
        options: [
            "Warming of 1.5°C",
            "Warming of 2.9°C",
            "Warming of 4.3°C",
            "Warming of 3.2°C"
        ]
    },
    {
        numb: 10,
        question: "If warming exceeds 1.5°C, it could be gradually reduced again by achieving and sustaining negative net zero global CO2 emissions. What is the year by which we must have reduced the 1.5°C by 50%, even if we go over this threshold?",
        answer: "2100",
        options: [
            "2080",
            "2090",
            "2100",
            "2200"
        ]
    },
    {
        numb: 11,
        question: "Which of the following options score the highest for feasibility of climate responses and adaptation and potential mitigation of options for near term for our: ",
        part1 = {
            subject: "Energy supply?",
            answer: "Solar",
            options: [
                "Reduction of methane, oil and gas",
                "Geothermal and hydropower",
                "Solar",
                "Wind",
                "Nuclear",
                "Bioelectricity",
                "Fossil Carbon Capture and Storage"
            ],
        },
        part2 = {
            subject: "Land, water and food?",
            answer: "Improved sustainable forest management, ecosystem restoration, afforestation and reforstation",
            options: [
                "Reduce conversion of natural ecosystems",
                "Improved sustainable forest management, ecosystem restoration, afforestation and reforstation",
                "Geothermal and hydropower",
                "Carbon sequestration in agriculture",
                "Reduce methane and N2O in agriculture",
            ],
            fact: "Interestingly, shifting to sustainable healthy diets and reducing food waste and food loss are not currently accounted for cost wise as there is a lack of variability. Ecosystem restoration, afforestation, reforestation scores high as the potential feasibility up to 1.5°C is most cost effective. Reducing conversion and carbon sequestration scores lowest for mitigation and costal defence, hardening and coastal zone management has lack of confidence due to the lack of assessment."
        },
        part3 = {
            subject: "Settlements and Infrastructure?",
            answer: "Fuel efficient vehicles, electric vehicles, public transport and bicycling, Efficient shipping and aviation and Avoid demand for energy services",
            options: [
                "Efficient buildings",
                "Fuel efficient vehicles, electric vehicles, public transport and bicycling",
                "Efficient shipping and aviation",
                "Avoid demand for energy services",
                "Onsite renewables",
                "Bioelectricity",
                "Sustainable water management"
            ],
            fact: "Trick question! Overall, there are a few options score high to mitigate our settlements and infrastructure. Efficient buildings and onsite renewables are the most expensive of all options. There is also not a lot of confidence in sustainable water management. Overall, having fuel efficient vehchiles, public transport, shipping and avaiation, and avoiding energy usage scores extremely high in both mitigating and feasaibity."
        },
        part4 = {
            subject: "Industry and waste?",
            answer: "Energy efficiency",
            options: [
                "Fuel switching",
                "CCUS and CCS",
                "Energy efficiency",
                "Enhanced recycling",
                "Material efficiency",
                "Reducing methane from water/wastewater ",
                "Construction materials substitution"
            ],
            fact: "Reducing methane from wastewater used to be most effective to mitigate however has become more expensive as we have got warmer. Energy efficiency costs $0-20 per tCO2-eq, however is 20% of the fraction of costs for fuel switching and CCU/CCS."
        },
    },
    {
        numb: 12,
        question: "Where does the highest synergy lie for mitigation and the Sustainable Development Goals (SDGs)?",
        answer: "Improved availability of and access to finance(public or private, local, national, international, bilateral, multinational and alternative sources) for climate action",
        options: [
            "Eradicating extreme poverty, energy poverty and providing decent living standards in low - emitting and vulnerable countries, including health benefits for women and children, electrification combined with low GHG energy, shifts to active mobility and public transport.",
            "Effective climate action enabled by political commitment, well-aligned multi-level governance, institutional frameworks, laws, policies and strategies for finance and technology.",
            "Improved availability of and access to finance(public or private, local, national, international, bilateral, multinational and alternative sources) for climate action."
        ]
    }
];

const explanation = [
    {
        numb: 1,
        answer: "Human activities, principally through emissions of greenhouse gases, have unequivocally caused global warming, with global surface temperature reaching 1.1°C above 1850 - 1900 in 2011 - 2020. Global surface temperature has increased faster since 1970 than in any other 50 - year period over at least the last 2000 years."
    },
    {
        numb: 2,
        answer: "Global greenhouse gas emissions have continued to increase, with unequal historical and ongoing contributions arising from unsustainable energy use, land use and land - use change, lifestyles and patterns of consumption and production across regions, between and within countries, and among individuals.All of the activities listed are current impacts of our human activity, however cities, settlements and infrastructure is the foremost affected, proving both adverse impacts and high confidence in the observed related losses and damages attributed to climate change."
    },
    {
        numb: 3,
        answer: "Adaptation planning and implementation has progressed across all sectors and regions, with documented benefits and varying effectiveness. Despite progress, adaptation gaps exist, and will continue to grow at current rates of implementation.Hard and soft limits to adaptation have been reached in some ecosystems and regions.Maladaptation is happening in some sectors and regions. Current global financial flows for adaptation are insufficient for, and constrain implementation of, adaptation options, especially in developing countries. As above, all answers are true and equally neccessary to move forward with current adaptation gaps."
    },
    {
        numb: 4,
        answer: "All of the answers here are true, however the report details that the overwhelming majority of tracked climate finance is directed towards mitigation, but falls significantly short of the levels needed to limit warming to below 2°C or to 1.5°C. Policies and laws addressing mitigation have consistently expanded since AR5. Global GHG emissions in 2030 implied by nationally determined contributions(NDCs) announced by October 2021 make it likely that warming will exceed 1.5°C during the 21st century and make it harder to limit warming below 2°C.There are gaps between projected emissions from implemented policies and those from NDCs and finance flows fall short of the levels needed to meet climate goals across all sectors and regions."
    },
    {
        numb: 5,
        answer: "Study concludes that edging towards 3-4°C all area of the tropics will be most affected with species lost, including serious losses but less affected to the subtropics and temperate zones."
    },
    {
        numb: 6,
        answer: "Projected regional impacts reflect biophysical responses to changing temperature, precipitation, solar radiation, humidity, wind, and CO2 enhancement of growth and water retention in currently cultivated areas. At 3.9°C and above, maize yield shows an estimated 25%+ of our global cultivated areas.Impacts also reflect fisheries and marine ecosystem responses to ocean physical and biogeochemical conditions such as temperature, oxygen level and net primary production.However, as much as there are similar levels of devastation to our fisheries, there are projected changes in increased catch potential in the artic regions and some of southern Africa."
    },
    {
        numb: 7,
        answer: "All options are affected by increase in the length of fire season from 1.5°C. At 2.5°C, we already see over 1,000 million additional people exposed to both permafrost degradation and biodiversity loss. At 3°C, it’s predicted that we will experience high levels of wildfire damage and dryland water scarcity. At 4°C, we will also see tree mortality and carbon loss affecting the majority of our lands."
    },
    {
        numb: 8,
        answer: "This study shows that warm-water corals are expected to decline to less than 1% of our current corals. Kelp forests, seagrass meadows and epipelagic zone are also show losses of 50% by 3°C, and rocky shores and salt marshes affected similarly by 4°C."
    },
    {
        numb: 9,
        answer: " Implemented policies(inclduing all current NDCs) result in projected emissions that lead to warming of 3.2°C, with a range of 2.2°C to 3.5°C."
    },
    {
        numb: 10,
        answer: "Overshooting 1.5°C will result in irreversible adverse impacts on certain ecosystems with low resilience, such as polar, mountain, and coastal ecosystems, impacted by ice - sheet, glacier melt, or by accelerating and higher committed sea level rise. The higher the magnitude and the longer the duration of overshoot, the more ecosystems and societies are exposed to greater and more widespread changes in climatic impact-drivers, increasing risks for many natural and human systems. A small number of ambitious global modelled pathways limit global warming to 1.5°C(>50%) by 2100 without exceeding this level temporarily."
    },
    {
        numb: 12,
        answer: "All three have high confidence to work towards mitigating global warming. Examples of improved availability for finance scores the highest and includes: addressing the needs and gaps for equitable finance, increased access to finance to advert risks for vulnerable countries, public finance for private finance, reducing financial barriers and scaling up financial flows, scaled - up public grants for areas like Sub-Sharan Africa, financing to enable technology for innovation and international co-operation for accessing finance."
    }
];