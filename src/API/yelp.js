import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
          'Bearer F0ZXgrxcWrzuz63M5BkZOOKvPWthpAVBHVBw5fLhodFfG2YCDWlNHtHXajzuDldjxcSmC-zU0qEWjfqZAWuw7egBAwH1gu3DXRiLK4JosYEYRnLWtIaiGFpc9c3aZHYx'
    }
});