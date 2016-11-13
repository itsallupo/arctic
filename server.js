var app = express();

app.use(stormpath.init(app, {
  website: true
}));

app.on('stormpath.ready', function() {
  app.listen(3000);
});
