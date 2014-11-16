import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('transform:variation-attributes', 'VariationAttributesTransform', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});
var input = [
                {
                    "id": "size",
                    "name": "Size",
                    "values": [
                        {
                            "description": "12",
                            "image": {
                                "alt": "Ditsy print jersey top",
                                "link": "https://domain/on/demandware.static/Sites-mandco-Site/Sites-MandCo-Master/default/v1414595851623/1163531_ivory_om_medium.jpg",
                                "title": "Ditsy print jersey top"
                            },
                            "image_swatch": {
                                "alt": "Ditsy print jersey top",
                                "link": "https://domain/on/demandware.static/Sites-mandco-Site/Sites-MandCo-Master/default/v1414595851623/1163531_ivory_p_swatch.jpg",
                                "title": "Ditsy print jersey top"
                            },
                            "name": "12",
                            "value": "0012"
                        },
                        {
                            "description": "14",
                            "image": {
                                "alt": "Ditsy print jersey top",
                                "link": "https://domain/on/demandware.static/Sites-mandco-Site/Sites-MandCo-Master/default/v1414595851623/1163531_ivory_om_medium.jpg",
                                "title": "Ditsy print jersey top"
                            },
                            "image_swatch": {
                                "alt": "Ditsy print jersey top",
                                "link": "https://domain/on/demandware.static/Sites-mandco-Site/Sites-MandCo-Master/default/v1414595851623/1163531_ivory_p_swatch.jpg",
                                "title": "Ditsy print jersey top"
                            },
                            "name": "14",
                            "value": "0014"
                        },
                        {
                            "description": "16",
                            "image": {
                                "alt": "Ditsy print jersey top",
                                "link": "https://domain/on/demandware.static/Sites-mandco-Site/Sites-MandCo-Master/default/v1414595851623/1163531_ivory_om_medium.jpg",
                                "title": "Ditsy print jersey top"
                            },
                            "image_swatch": {
                                "alt": "Ditsy print jersey top",
                                "link": "https://domain/on/demandware.static/Sites-mandco-Site/Sites-MandCo-Master/default/v1414595851623/1163531_ivory_p_swatch.jpg",
                                "title": "Ditsy print jersey top"
                            },
                            "name": "16",
                            "value": "0016"
                        },
                        {
                            "description": "18",
                            "image": {
                                "alt": "Ditsy print jersey top",
                                "link": "https://domain/on/demandware.static/Sites-mandco-Site/Sites-MandCo-Master/default/v1414595851623/1163531_ivory_om_medium.jpg",
                                "title": "Ditsy print jersey top"
                            },
                            "image_swatch": {
                                "alt": "Ditsy print jersey top",
                                "link": "https://domain/on/demandware.static/Sites-mandco-Site/Sites-MandCo-Master/default/v1414595851623/1163531_ivory_p_swatch.jpg",
                                "title": "Ditsy print jersey top"
                            },
                            "name": "18",
                            "value": "0018"
                        },
                        {
                            "description": "20",
                            "image": {
                                "alt": "Ditsy print jersey top",
                                "link": "https://domain/on/demandware.static/Sites-mandco-Site/Sites-MandCo-Master/default/v1414595851623/1163531_ivory_om_medium.jpg",
                                "title": "Ditsy print jersey top"
                            },
                            "image_swatch": {
                                "alt": "Ditsy print jersey top",
                                "link": "https://domain/on/demandware.static/Sites-mandco-Site/Sites-MandCo-Master/default/v1414595851623/1163531_ivory_p_swatch.jpg",
                                "title": "Ditsy print jersey top"
                            },
                            "name": "20",
                            "value": "0020"
                        },
                        {
                            "description": "8",
                            "image": {
                                "alt": "Ditsy print jersey top",
                                "link": "https://domain/on/demandware.static/Sites-mandco-Site/Sites-MandCo-Master/default/v1414595851623/1163531_ivory_om_medium.jpg",
                                "title": "Ditsy print jersey top"
                            },
                            "image_swatch": {
                                "alt": "Ditsy print jersey top",
                                "link": "https://domain/on/demandware.static/Sites-mandco-Site/Sites-MandCo-Master/default/v1414595851623/1163531_ivory_p_swatch.jpg",
                                "title": "Ditsy print jersey top"
                            },
                            "name": "8",
                            "value": "0008"
                        },
                        {
                            "description": "10",
                            "image": {
                                "alt": "Ditsy print jersey top",
                                "link": "https://domain/on/demandware.static/Sites-mandco-Site/Sites-MandCo-Master/default/v1414595851623/1163531_ivory_om_medium.jpg",
                                "title": "Ditsy print jersey top"
                            },
                            "image_swatch": {
                                "alt": "Ditsy print jersey top",
                                "link": "https://domain/on/demandware.static/Sites-mandco-Site/Sites-MandCo-Master/default/v1414595851623/1163531_ivory_p_swatch.jpg",
                                "title": "Ditsy print jersey top"
                            },
                            "name": "10",
                            "value": "0010"
                        }
                    ]
                },
                {
                    "id": "color",
                    "name": "Colour",
                    "values": [
                        {
                            "description": "IVORY",
                            "image": {
                                "alt": "Ditsy print jersey top",
                                "link": "https://domain/on/demandware.static/Sites-mandco-Site/Sites-MandCo-Master/default/v1414595851623/1163531_ivory_om_medium.jpg",
                                "title": "Ditsy print jersey top"
                            },
                            "image_swatch": {
                                "alt": "Ditsy print jersey top",
                                "link": "https://domain/on/demandware.static/Sites-mandco-Site/Sites-MandCo-Master/default/v1414595851623/1163531_ivory_p_swatch.jpg",
                                "title": "Ditsy print jersey top"
                            },
                            "name": "IVORY",
                            "value": "0044"
                        }
                    ]
                }
            ];
// Replace this with your real tests.
test('it exists', function() {
  var transform = this.subject();
  ok(transform);
});
