"use strict";
var scrape = (function () {
    function scrape(url) {
        var base_params;
        if (url.split('//').length < 2) {
            throw Error('please give a valid url');
        }
        else {
            var uid = void 0;
            var provider = url.split('//')[1].split('/')[0];
            var query = url.split(provider)[1];
            switch (provider) {
                case "facebook.com":
                    throw Error('todo');
                case "www.youtube.com":
                    uid = query.split('v=')[1].split('&')[0];
                    base_params.uid = uid;
                    base_params.provider = 'youtube';
                    base_params.img = 'http://img.youtube.com/vi/' + uid + '/default.jpg';
                    base_params.hqimg = 'http://img.youtube.com/vi/' + uid + '/hqdefault.jpg';
                    base_params.mqimg = 'http://img.youtube.com/vi/' + uid + '/mqdefault.jpg';
                    base_params.sdimg = 'http://img.youtube.com/vi/' + uid + '/sddefault.jpg';
                    base_params.maximg = 'http://img.youtube.com/vi/' + uid + '/maxresdefault.jpg';
                    base_params.url = url;
                    break;
                case "youtube.com":
                    uid = query.split('v=')[1].split('&')[0];
                    base_params.uid = uid;
                    base_params.provider = 'youtube';
                    base_params.img = 'http://img.youtube.com/vi/' + uid + '/default.jpg';
                    base_params.hqimg = 'http://img.youtube.com/vi/' + uid + '/hqdefault.jpg';
                    base_params.mqimg = 'http://img.youtube.com/vi/' + uid + '/mqdefault.jpg';
                    base_params.sdimg = 'http://img.youtube.com/vi/' + uid + '/sddefault.jpg';
                    base_params.maximg = 'http://img.youtube.com/vi/' + uid + '/maxresdefault.jpg';
                    base_params.url = url;
                    break;
                default:
                    throw Error('provider is not supported');
            }
        }
        this.base_params = base_params;
    }
    return scrape;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = scrape;

//# sourceMappingURL=data:application/json;base64,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QUF3RUMsSUFBQTtBQXhFRDt3QkF3RUMsQ0FBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFByb21pc2UgZnJvbSBcImJsdWViaXJkXCJcblxuaW50ZXJmYWNlIElTY3JhcGVCYXNlUGFyYW1zIHtcbnVpZDpzdHJpbmc7XG5wcm92aWRlcjpzdHJpbmc7XG51cmw6c3RyaW5nO1xuXG5pbWc/OnN0cmluZztcblxuaHFpbWc/OnN0cmluZztcbm1xaW1nPzpzdHJpbmc7XG5zZGltZz86c3RyaW5nO1xubWF4aW1nPzpzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNjcmFwZSB7XG4gICAgYmFzZV9wYXJhbXM6IElTY3JhcGVCYXNlUGFyYW1zO1xuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBiYXNlX3BhcmFtczogSVNjcmFwZUJhc2VQYXJhbXM7XG5cbiAgICAgICAgaWYgKHVybC5zcGxpdCgnLy8nKS5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGxlYXNlIGdpdmUgYSB2YWxpZCB1cmwnKVxuICAgICAgICB9IGVsc2Uge1xuXG5cblxuICAgICAgICAgICAgbGV0IHVpZDogc3RyaW5nO1xuXG4gICAgICAgICAgICBjb25zdCBwcm92aWRlciA9IHVybC5zcGxpdCgnLy8nKVsxXS5zcGxpdCgnLycpWzBdXG5cbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gdXJsLnNwbGl0KHByb3ZpZGVyKVsxXVxuXG5cbiAgICAgICAgICAgIHN3aXRjaCAocHJvdmlkZXIpIHtcblxuXG4gICAgICAgICAgICAgICAgY2FzZSBcImZhY2Vib29rLmNvbVwiOlxuXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCd0b2RvJylcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJ3d3cueW91dHViZS5jb21cIjpcbiAgICAgICAgICAgICAgICAgICAgdWlkID0gcXVlcnkuc3BsaXQoJ3Y9JylbMV0uc3BsaXQoJyYnKVswXTtcblxuICAgICAgICAgICAgICAgICAgICBiYXNlX3BhcmFtcy51aWQ9IHVpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfcGFyYW1zLnByb3ZpZGVyPSAgJ3lvdXR1YmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9wYXJhbXMuaW1nPSAgJ2h0dHA6Ly9pbWcueW91dHViZS5jb20vdmkvJyArIHVpZCArICcvZGVmYXVsdC5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlX3BhcmFtcy5ocWltZz0gICdodHRwOi8vaW1nLnlvdXR1YmUuY29tL3ZpLycgKyB1aWQgKyAnL2hxZGVmYXVsdC5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlX3BhcmFtcy5tcWltZz0gJ2h0dHA6Ly9pbWcueW91dHViZS5jb20vdmkvJyArIHVpZCArICcvbXFkZWZhdWx0LmpwZydcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfcGFyYW1zLnNkaW1nPSAnaHR0cDovL2ltZy55b3V0dWJlLmNvbS92aS8nICsgdWlkICsgJy9zZGRlZmF1bHQuanBnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9wYXJhbXMubWF4aW1nPSAgJ2h0dHA6Ly9pbWcueW91dHViZS5jb20vdmkvJyArIHVpZCArICcvbWF4cmVzZGVmYXVsdC5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlX3BhcmFtcy51cmw9IHVybDtcblxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuXG4gICAgICAgICAgICAgICAgY2FzZSBcInlvdXR1YmUuY29tXCI6XG5cbiAgICAgICAgICAgICAgICAgICAgdWlkID0gcXVlcnkuc3BsaXQoJ3Y9JylbMV0uc3BsaXQoJyYnKVswXTtcblxuICAgICAgICAgICAgICAgICAgICBiYXNlX3BhcmFtcy51aWQ9IHVpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfcGFyYW1zLnByb3ZpZGVyPSAgJ3lvdXR1YmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9wYXJhbXMuaW1nPSAgJ2h0dHA6Ly9pbWcueW91dHViZS5jb20vdmkvJyArIHVpZCArICcvZGVmYXVsdC5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlX3BhcmFtcy5ocWltZz0gICdodHRwOi8vaW1nLnlvdXR1YmUuY29tL3ZpLycgKyB1aWQgKyAnL2hxZGVmYXVsdC5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlX3BhcmFtcy5tcWltZz0gJ2h0dHA6Ly9pbWcueW91dHViZS5jb20vdmkvJyArIHVpZCArICcvbXFkZWZhdWx0LmpwZydcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfcGFyYW1zLnNkaW1nPSAnaHR0cDovL2ltZy55b3V0dWJlLmNvbS92aS8nICsgdWlkICsgJy9zZGRlZmF1bHQuanBnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9wYXJhbXMubWF4aW1nPSAgJ2h0dHA6Ly9pbWcueW91dHViZS5jb20vdmkvJyArIHVpZCArICcvbWF4cmVzZGVmYXVsdC5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlX3BhcmFtcy51cmw9IHVybDtcblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdwcm92aWRlciBpcyBub3Qgc3VwcG9ydGVkJylcblxuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFzZV9wYXJhbXMgPSBiYXNlX3BhcmFtc1xuXG4gICAgfVxuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
