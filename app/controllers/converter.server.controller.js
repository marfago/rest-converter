'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash'),
    fs = require('fs'),
    XLSX = require('XLSX'),
    uuid = require('uuid'),
    multiparty = require('multiparty'),
    temp = require('temp').track()
    ;
    
/**
 * Create a Converter
 */
exports.convert = function(req, res) {
    console.log('convert api called');
    
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        var file = files.file[0].path;
        var workbook = XLSX.readFile(file);
        
        var result = {};
        var sheet_name_list = workbook.SheetNames;
        sheet_name_list.forEach(function(y) {
            var sheet = {};
            var worksheet = workbook.Sheets[y];            
            for (var z in worksheet) {
                if(z[0] === '!') continue;
                sheet[z] = worksheet[z].v;
            }
            result[y] = sheet;
        });
        return res.send(result);
    });
    
    console.log('Converting xlsx');
    return res.status(200);
};
    
/**
 * Create a Converter
 */
exports.create = function(req, res) {

};

/**
 * Show the current Converter
 */
exports.read = function(req, res) {

};

/**
 * Update a Converter
 */
exports.update = function(req, res) {

};

/**
 * Delete an Converter
 */
exports.delete = function(req, res) {

};

/**
 * List of Converters
 */
exports.list = function(req, res) {

};