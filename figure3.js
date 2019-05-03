var yourVlSpec3 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "data": {"url": "https://raw.githubusercontent.com/27guptamohit/120years_of_olympics/master/openpowerlifting.csv"},
    "hconcat": [{
    "mark":"rect",
  "width": 500,
  "height": 500,
  "encoding": {
    "x": {
      "bin": {"maxbins":60},
      "field": "BodyweightKg",
      "type": "quantitative"
    },
    "y": {
      "bin": {"maxbins": 40},
      "field": "TotalKg",
      "type": "quantitative"
    },
    "color": {
       "aggregate": "count",
      "type": "quantitative",
      "scale": {"range": ["purple", "#ff0000", "teal"]    }     }
  },
  "config": {
    "view": {
      "stroke": "transparent"
    }
  }
},

        {
            "height": 500,
  "width": 500,
  "mark": "bar",
  "encoding": {
    "y": {"field": "BodyweightKg","type": "quantitative",
    "aggregate": "count"
                
},
    "x": {"field": "TotalKg","type": "quantitative","bin": {"maxbins":10}
    },
    "color": {"field": "Equipment","type": "nominal"}
  }
        }

    ]};

var embedded = vegaEmbed('#vis3', yourVlSpec3);
