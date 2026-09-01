const t = e => "imageAssetBlock" === e.block ? .[0] ? ._type,
    s = e => "videoAssetBlock" === e.block ? .[0] ? ._type,
    o = e => "wistiaAssetBlock" === e.block ? .[0] ? ._type,
    i = e => "youtubeAssetBlock" === e.block ? .[0] ? ._type,
    y = e => {
        if (t(e)) return {
            _type: "asset",
            value: [{
                _key: e.block[0]._key,
                _type: "imageAsset",
                image: e.block[0].imageAsset.image
            }]
        };
        if (s(e)) return {
            _type: "asset",
            value: [{
                _key: e.block[0]._key,
                _type: "videoAsset",
                video: e.block[0].videoAsset.video
            }]
        };
        if (o(e)) return {
            _type: "asset",
            value: [{
                _key: e.block[0]._key,
                _type: "wistiaAsset",
                wistiaVideo: e.block[0].wistiaAsset.wistiaVideo
            }]
        };
        if (i(e)) return {
            _type: "asset",
            value: [{
                _key: e.block[0]._key,
                _type: "youtubeAsset",
                youtubeVideo: e.block[0].youtubeAsset.youtubeVideo
            }]
        };
        throw new Error(`Unsupported asset block type: ${e.block[0]?._type}`)
    };
export {
    s as a, o as b, y as c, i as d, t as i
};