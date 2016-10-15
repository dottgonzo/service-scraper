"use strict";
var scrape = (function () {
    function scrape(url) {
        var base_params = {};
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

//# sourceMappingURL=data:application/json;base64,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QUFELENBeEVBLEFBd0VDLElBQUE7QUF4RUQ7d0JBd0VDLENBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBQcm9taXNlIGZyb20gXCJibHVlYmlyZFwiXG5cbmludGVyZmFjZSBJU2NyYXBlQmFzZVBhcmFtcyB7XG4gICAgdWlkOiBzdHJpbmc7XG4gICAgcHJvdmlkZXI6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcblxuICAgIGltZz86IHN0cmluZztcblxuICAgIGhxaW1nPzogc3RyaW5nO1xuICAgIG1xaW1nPzogc3RyaW5nO1xuICAgIHNkaW1nPzogc3RyaW5nO1xuICAgIG1heGltZz86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2NyYXBlIHtcbiAgICBiYXNlX3BhcmFtczogSVNjcmFwZUJhc2VQYXJhbXM7XG4gICAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGJhc2VfcGFyYW1zPTxJU2NyYXBlQmFzZVBhcmFtcz57fTtcblxuICAgICAgICBpZiAodXJsLnNwbGl0KCcvLycpLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwbGVhc2UgZ2l2ZSBhIHZhbGlkIHVybCcpXG4gICAgICAgIH0gZWxzZSB7XG5cblxuXG4gICAgICAgICAgICBsZXQgdWlkOiBzdHJpbmc7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gdXJsLnNwbGl0KCcvLycpWzFdLnNwbGl0KCcvJylbMF1cblxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB1cmwuc3BsaXQocHJvdmlkZXIpWzFdXG5cblxuICAgICAgICAgICAgc3dpdGNoIChwcm92aWRlcikge1xuXG5cbiAgICAgICAgICAgICAgICBjYXNlIFwiZmFjZWJvb2suY29tXCI6XG5cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3RvZG8nKVxuXG4gICAgICAgICAgICAgICAgY2FzZSBcInd3dy55b3V0dWJlLmNvbVwiOlxuICAgICAgICAgICAgICAgICAgICB1aWQgPSBxdWVyeS5zcGxpdCgndj0nKVsxXS5zcGxpdCgnJicpWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgIGJhc2VfcGFyYW1zLnVpZCA9IHVpZDtcbiAgICAgICAgICAgICAgICAgICAgYmFzZV9wYXJhbXMucHJvdmlkZXIgPSAneW91dHViZSc7XG4gICAgICAgICAgICAgICAgICAgIGJhc2VfcGFyYW1zLmltZyA9ICdodHRwOi8vaW1nLnlvdXR1YmUuY29tL3ZpLycgKyB1aWQgKyAnL2RlZmF1bHQuanBnJ1xuICAgICAgICAgICAgICAgICAgICBiYXNlX3BhcmFtcy5ocWltZyA9ICdodHRwOi8vaW1nLnlvdXR1YmUuY29tL3ZpLycgKyB1aWQgKyAnL2hxZGVmYXVsdC5qcGcnXG4gICAgICAgICAgICAgICAgICAgIGJhc2VfcGFyYW1zLm1xaW1nID0gJ2h0dHA6Ly9pbWcueW91dHViZS5jb20vdmkvJyArIHVpZCArICcvbXFkZWZhdWx0LmpwZydcbiAgICAgICAgICAgICAgICAgICAgYmFzZV9wYXJhbXMuc2RpbWcgPSAnaHR0cDovL2ltZy55b3V0dWJlLmNvbS92aS8nICsgdWlkICsgJy9zZGRlZmF1bHQuanBnJ1xuICAgICAgICAgICAgICAgICAgICBiYXNlX3BhcmFtcy5tYXhpbWcgPSAnaHR0cDovL2ltZy55b3V0dWJlLmNvbS92aS8nICsgdWlkICsgJy9tYXhyZXNkZWZhdWx0LmpwZydcbiAgICAgICAgICAgICAgICAgICAgYmFzZV9wYXJhbXMudXJsID0gdXJsO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuXG4gICAgICAgICAgICAgICAgY2FzZSBcInlvdXR1YmUuY29tXCI6XG5cbiAgICAgICAgICAgICAgICAgICAgdWlkID0gcXVlcnkuc3BsaXQoJ3Y9JylbMV0uc3BsaXQoJyYnKVswXTtcblxuICAgICAgICAgICAgICAgICAgICBiYXNlX3BhcmFtcy51aWQgPSB1aWQ7XG4gICAgICAgICAgICAgICAgICAgIGJhc2VfcGFyYW1zLnByb3ZpZGVyID0gJ3lvdXR1YmUnO1xuICAgICAgICAgICAgICAgICAgICBiYXNlX3BhcmFtcy5pbWcgPSAnaHR0cDovL2ltZy55b3V0dWJlLmNvbS92aS8nICsgdWlkICsgJy9kZWZhdWx0LmpwZydcbiAgICAgICAgICAgICAgICAgICAgYmFzZV9wYXJhbXMuaHFpbWcgPSAnaHR0cDovL2ltZy55b3V0dWJlLmNvbS92aS8nICsgdWlkICsgJy9ocWRlZmF1bHQuanBnJ1xuICAgICAgICAgICAgICAgICAgICBiYXNlX3BhcmFtcy5tcWltZyA9ICdodHRwOi8vaW1nLnlvdXR1YmUuY29tL3ZpLycgKyB1aWQgKyAnL21xZGVmYXVsdC5qcGcnXG4gICAgICAgICAgICAgICAgICAgIGJhc2VfcGFyYW1zLnNkaW1nID0gJ2h0dHA6Ly9pbWcueW91dHViZS5jb20vdmkvJyArIHVpZCArICcvc2RkZWZhdWx0LmpwZydcbiAgICAgICAgICAgICAgICAgICAgYmFzZV9wYXJhbXMubWF4aW1nID0gJ2h0dHA6Ly9pbWcueW91dHViZS5jb20vdmkvJyArIHVpZCArICcvbWF4cmVzZGVmYXVsdC5qcGcnXG4gICAgICAgICAgICAgICAgICAgIGJhc2VfcGFyYW1zLnVybCA9IHVybDtcblxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcigncHJvdmlkZXIgaXMgbm90IHN1cHBvcnRlZCcpXG5cbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhc2VfcGFyYW1zID0gYmFzZV9wYXJhbXNcblxuICAgIH1cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
