/**
 * Created by billsu on 9/19/16.
 */

// Pulls Mongoose dependency for creating schemas
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Creates a User Schema. This will be the basis of how user data is stored in the db
var PropertySchema = new Schema({
    _id: {type: Object, required: true},
    property_number: {type: String, required: true},
    owner_name: {type: String, required: true},
    owner_address: String,
    tax_set: String,
    school_district: String,
    neighborhood: String,
    use_code: String,
    use_code_number: Number,
    use_code_text: String,
    acres: Number,
    description: String,
    property_address: String,
    tax_payer_address: String,
    assessment_info:
    [{board_of_revision: String,
        homestead_disability: String,
        owner_occupied: String,
        divided_property: String,
        new_construction: String,
        foreclosure: String,
        other_assessments: String,
        front_ft: Number}],
    current_value:
    [{market_land_value: String,
        CAUV_value: String,
        market_improvement_value: String,
        market_value_total: String}],
    current_tax:
    [{annual_tax: String,
        tax_paid: String,
        tax_delq: String}],
    recent_transfer:
    [{valid_sale: String,
        number_parcels: Number,
        deed_type: String,
        sale_amount: String,
        sale_date: Date,
        conveyance: String,
        deed_number: Number}],
    card_numbers: Number,
    cards: Array,
    land: Array,
    CAUV_land: Array,
    tax_information: Array,
    tax_payments: Array,
    special_assessments: Array,
    transfer_history: Array,
    value_history: Array,
    vacancy_report: Array,
    code_enforcement_report: Array,
    foreclosed: Boolean
});

// // Sets the created_at parameter equal to the current time
// PropertySchema.pre('save', function(next){
//     now = new Date();
//     this.updated_at = now;
//     if(!this.created_at) {
//         this.created_at = now
//     }
//     next();
// });

// Indexes this schema in 2dsphere format (critical for running proximity searches)
// PropertySchema.index({location: '2dsphere'});

// Exports the UserSchema for use elsewhere. Sets the MongoDB collection to be used as: "scotch-users"
module.exports = mongoose.model('Property', PropertySchema, "property_reports");
