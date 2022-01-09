export const characterestics = [{
    label: 'Height',
    property: 'height',
    subProperties: ['feet', 'inches'],
    concatinate: ':'
}, {
    label: 'Build',
    property: 'build'
}, {
    label: 'Weight',
    property: 'weight'
}, {
    label: 'Playing Age',
    property: 'playing_age'
}, {
    label: 'Skin Tone',
    property: 'skin_tone'
}, {
    label: 'Eye Color',
    property: 'eye_color'
}, {
    label: 'Hair Color',
    property: 'hair_color'
}, {
    label: 'Hair Length',
    property: 'hair_length'
}];

export const skills = {
    primary: [{
        label: 'Education',
        dataProperty: 'education.schools',
        displayProperty: 'degree'
    }, {
        label: 'Pro Training',
        dataProperty: 'trainings',
        displayProperty: 'name'
    }, {
        label: 'Other Certifications',
        dataProperty: 'certifications',
        displayProperty: 'name'
    }],
    secondary: [
        [{
            label: 'Primary Career',
            property: 'primary_career.name'
        }, {
            label: 'Open to',
            property: ''
        }, {
            label: 'Primary Reason',
            property: 'primary_region.name'
        }, {
            label: 'Interested In',
            property: 'interested_in.details'
        }], 
        [{
            label: 'Ethnicity',
            property: 'primary_career.name'
        }, {
            label: 'Skin Color',
            property: 'physical_info.skin_tone'
        }, {
            label: 'Hair length',
            property: 'physical_info.hair_length'
        }, {
            label: 'Mother tongue',
            property: 'primary_region.name'
        }, {
            label: 'Can speak',
            property: 'primary_career.other'
        }, {
            label: 'Native accent',
            property: 'primary_region.name'
        }, {
            label: 'Other accent',
            property: 'primary_region.other'
        }], 
        [{
            label: 'Interested In',
            property: 'interested_in.details'
        }, {
            label: 'Experience In',
            property: 'experienced_ind.details'
        }],
        [{   
            label: 'Singing Skills',
            property: 'skills.siging.details'
        }, {   
            label: 'Dancing Skills',
            property: 'skills.dance.details',
        }, {   
            label: 'Music Instruments',
            property: 'skills.music.details',
        }, {   
            label: 'Intimate scense',
            property: ' '
        }, {   
            label: 'Perform nude?',
            property: ' '
        }, {   
            label: 'Kiss Scence',
            property: ' '
        }]
    ]
};

export const socialProfile = [{
    label: 'Special skills',
    property: 'skills.special.details'
}, {
    label: 'IMDB Profile url',
    property: 'IMBD_profile_url'
}, {
    label: 'Pro Memberships',
    property: ''
}];