import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'BearerNlmJG1U2n9AR0loRb7eVOYK_EFx6RqzWXNwN-e7oT_wt69iP1CkYI0iQYzSMUXmaeWW3VPQjHv-a87yNkMc8Ucs3gGCeSWgpDcg3P5ujw7jKFZqTqWIIGD-gC4k9X3Yx',
	},
});

// GET https://api.yelp.com/v3/businesses/{id}

// GET https://api.yelp.com/v3/businesses/search
