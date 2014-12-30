define([
        'JBrowse/Model/SimpleFeature',
        'JBrowse/Util/ImportFeature',
        'JBrowse/Util/ExportFeature'
        ],
function (SimpleFeature, importFeature, exportFeature) {
    // This transcript is corresponding to RefSeq_2
    // which is located in file data/RefSeq_2.js
    var feature = {
    "data": {
        "end": 44,
        "start": 1,
        "strand": 1,
        "subfeatures": [
            {
                "data": {
                    "end": 34,
                    "start": 1,
                    "strand": 1,
                    "type": "CDS"
                }
            },
            {
                "data": {
                    "end": 44,
                    "start": 1,
                    "strand": 1,
                    "type": "exon"
                }
            }
        ],
        "type": "transcript"
    }
};

var transcript = importFeature(feature);
return transcript;
});
