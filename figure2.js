var yourVlSpec2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "title": {
        "text":"Select the options from the drop down menu",
        "anchor": "middle"},
    "data": {
        "url": "https://raw.githubusercontent.com/27guptamohit/120years_of_olympics/master/athlete_events.csv"
    },
    "vconcat": [
    {
        "encoding": {
            "color": {
                "condition": {
                    "legend": null,
                    "field": "Medal",
                    "selection": "brush",
                    "type": "nominal"
                }
            },
            "x": {
                "field": "Year",
                "type": "ordinal",
                "axis": {"labelAngle": 0},
                "bin": {
                    "binned": false,
                    "step": 8
                }
                
            },
            "y": {"field": "Medal", "type": "nominal", "axis": {"title": ""}},
            "size": {
                "field": "Medal",
                "type": "nominal",
                "aggregate": "count",
                "legend": {"title": "Count", "clipHeight": 30},
                "scale": {"range": [0, 5000]}
            }
        },
        "width": 900,
        "height": 300,
        "mark": {
            "type": "circle",
            "opacity": 0.8,
            "stroke": "black",
            "strokeWidth": 1
        },
        "selection": {"brush": {"type": "interval"}},
        "transform": [{"filter": {"selection": "click", "field": "Medal", "oneOf": ["Gold", "Bronze", "Silver"]}}]
    },
    {
        "hconcat":[
        {
            "encoding": {
                "color": {
                    "condition": {
                        "title": "Legend",
                        "field": "Sex",
                        "selection": "click",
                        "type": "nominal"
                    },
                    "value": "lightgray"
                },
                "y": {"field": "Height", "type": "quantitative"},
                "x": {"field": "Weight", "type": "nominal",
                    "bin": {
                        "binned": false,
                        "step": 5
                    }
                }
            },
            "width": 900,
            "height": 235,
            "mark": "circle",
            "selection": {"click": {"encodings": ["color"], "type": "multi"}},
            "transform": [{"filter": {"selection": "brush"}}]
        }
        
        ]
    }
    ]
};

var embedded = vegaEmbed('#vis2', yourVlSpec2);