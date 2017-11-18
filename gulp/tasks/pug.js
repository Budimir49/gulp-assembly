'use strict';

//Препроцессор Pug
module.exports = function () {

    $.gulp.task('pug', function () {
        return $.gulp.src($.config.sourceFolderRoot + '/' + $.config.sourceFolderPug + '/*.pug')
            .pipe($.gp.pug({ pretty: true}))
            .on('error', $.gp.notify.onError(function
                (error) {
                    return {
                        title: 'Pug',
                        message: error.message
                    }
                }))
            .pipe($.gulp.dest($.config.outputFolderRoot));
    });

};

