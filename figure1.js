var yourVlSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "data": {
        "url": "https://raw.githubusercontent.com/27guptamohit/120years_of_olympics/master/athlete_events.csv"
    },
    "hconcat": [{

         "selection": {
        "1":{
            "type": "single",
            "fields": ["Sex"],
            "bind" : {
                "input": "select", "options": [
                null, "M", "F"
                ]
            }
        }
    },
    "width": 350,
    "height": 350,
    "transform": [
    {"filter": {"selection": "1"}}
    ],
    "title": "Distribution of Participants Based on Height & Weight",
    "mark": "rect",
    "encoding": {
        "y": {
            "field": "Height",
            "type": "quantitative",
            "title": "Height",
            "bin": {"maxbins":40}
            
        },
        "x": {
            "field": "Weight",
            "type": "quantitative",
            "title": "Weight",
            "bin": {"maxbins":60}
            
        },
        "color": {
            "field": "Height",
            "aggregate": "count",
            "type": "quantitative",
            "legend": {
                "title": "Count of Records"
            }
        }
    }

    },

    {
        "mark": "rect",
    "width": 350,
    "height": 350,
        "title": "Distribution of Medals Based on Height & Weight",

    "encoding": {
        "x": {
            "bin": {"maxbins":60},
            "field": "Weight",
            "type": "quantitative"
        },
        "y": {
            "bin": {"maxbins": 40},
            "field": "Height",
            "type": "quantitative"
        },
        "color": {
            
            "field":"Medal", "type": "nominal",
            "scale": {
                "domain": ["","Gold","Silver","Bronze"],
                "range": ["#283845", "#FCAB10","#F0EFF4","#F29559"]
            }
            
        }
    },
    "config": {
        "view": {
            "stroke": "transparent"
        }
    }
    }



    ]};

var embedded = vegaEmbed('#vis', yourVlSpec);