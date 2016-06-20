//#gulp.task('name'[, dep], fn)

//#gulp.src(glob[, options])
//options.base : Defines how much of the path to retain

//#gulp.dest(folder[,options])

//#gulp.watch(glob[, options], tasks);
//#gulp.watch(glob[, options], cb);


//Test and Lint Code
//Optimize Files
//Serve Your App

gulp.task('js', ['jscs', 'jshint'], function() {
    return gulp
        .src('./src/**/*.js', {base: './src/'}) // Writes ./src/app/admin/admin.js
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/'));           // to     ./build/app/admin/admin.js
});

gulp.tash('lint-watcher', function() {
    gulp.watch('./src/**/*.js', ['jshint', 'jscs'], function(evt) {
        console.log('watched event', evt.type);
        console.log('for', evt.path);
    });
});