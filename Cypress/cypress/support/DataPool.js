const faker = require("faker");


class DataPool {
	
	getDataForCreateTag() {
		return faker.lorem.sentence();
	}

	getDataForCreateInternalTag() {
		return faker.lorem.sentence();
	}
	
	getDataForUpdateTag() {
		return faker.lorem.sentence();
	}

	getDataForDeleteTag() {
		return faker.lorem.sentence();
	}

    getDataForCreateDeletePost() {
		return faker.lorem.sentence();
	}

	getDataForCreatePage(){
		return faker.lorem.sentence();
	}

    getDataForUpdatePage(){
		return faker.lorem.sentence();
	}
	
	getDataForDeletePage(){
		return faker.lorem.sentence();
	}

    getDataForCreateSchedulePost(){
		return faker.lorem.sentence();
	}

    getDataForUpdateSchedulePost(){
		return faker.lorem.sentence();
	}

}
export default DataPool