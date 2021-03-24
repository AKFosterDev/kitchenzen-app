import bcrypt from 'bcryptjs'

const data = {
	users: [
		{
			name: 'Amanda',
			email: 'amanda@email.com',
			password: bcrypt.hashSync('1234', 8),
			isAdmin: true,
		},
		{
			name: 'Paul',
			email: 'paul@email.com',
			password: bcrypt.hashSync('1234', 8),
			isAdmin: false,
		},
	],
	products: [
		{
			_id: '1',
			name: 'Ninja Food Processor',
			category: 'Small Appliances',
			image: '/images/p1.png',
			price: 99,
			countInStock: 10,
			brand: 'Ninja',
			rating: 5,
			numReviews: 1928,
			description: 'Professional quality food processor.',
		},
		{
			_id: '2',
			name: 'Cuisinart Food Processor',
			category: 'Small Appliances',
			image: '/images/p2.png',
			price: 199,
			countInStock: 20,
			brand: 'Cuisinart',
			rating: 4.5,
			numReviews: 916,
			description: 'Elemental 13 cup food processor and dicing kit.',
		},
		{
			_id: '3',
			name: 'Mueller Ultra Power Juicer',
			category: 'Small Appliances',
			image: '/images/p3.png',
			price: 64,
			countInStock: 0,
			brand: 'Mueller',
			rating: 4.5,
			numReviews: 26281,
			description: 'Ultra power juicer with easy clean extractor press.',
		},
		{
			_id: '4',
			name: 'Cuisinart Stainless Cookware Set',
			category: 'Cookware',
			image: '/images/p4.png',
			price: 159,
			countInStock: 15,
			brand: 'Cuisinart',
			rating: 4.5,
			numReviews: 4986,
			description: "Chef's classic stainless 11 piece cookware set.",
		},
		{
			_id: '5',
			name: 'Michelangelo Cookware Set',
			category: 'Cookware',
			image: '/images/p5.png',
			price: 129,
			countInStock: 5,
			brand: 'Michelangelo',
			rating: 4.5,
			numReviews: 122,
			description: 'Professional anodized 10 piece cookware set.',
		},
		{
			_id: '6',
			name: 'Chicago Cutlery Knife Block Set',
			category: 'Cutlery',
			image: '/images/p6.png',
			price: 230,
			countInStock: 5,
			brand: 'Chicago Cutlery',
			rating: 4.5,
			numReviews: 3968,
			description: 'Professional Fusion 17 piece knife block set.',
		},
	],
}

export default data
