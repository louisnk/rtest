var _ = require('lodash')

module.exports = {
	hello: function(req, res) {
		if (req.query.hello) {
			return res.status(200).json({
				message: 'hello',
				rounds: [{
						players: [
							{ email: 'ONE@test.com', other: 'player 1' },
							{ email: 'TWO@test.com', other: 'player 2' },
							{ email: 'THREE@test.com', other: 'player 3' }
						],
						time: '3:00 PM',
						location: 'Berkeley, CA'
					},{
						players: [
							{ email: '6:00 - ONE@test.com', other: 'player 1' },
							{ email: '6:00  - TWO@test.com', other: 'player 2' },
							{ email: '6:00  - THREE@test.com', other: 'player 3' }
						],
						time: '6:00 PM',
						location: 'Berkeley, CA'
					},{
						players: [
							{ email: '9:00 - ONE@test.com', other: 'player 1' },
							{ email: '9:00  - TWO@test.com', other: 'player 2' },
							{ email: '9:00  - THREE@test.com', other: 'player 3' }
						],
						time: '9:00 PM',
						location: 'Berkeley, CA'
					},{
						players: [
							{ email: '10:30- ONE@test.com', other: 'player 1' },
							{ email: '10:30 - TWO@test.com', other: 'player 2' },
							{ email: '10:30 - THREE@test.com', other: 'player 3' }
						],
						time: '10:30 PM',
						location: 'Berkeley, CA'
				}]
			})
		} else {
			res.status(400).json({
				error: 'incorrect parameters'
			})
		}
	},
	world: function(req, res) {
		return res.status(200).json({
			message: 'world'
		})
	}
}
