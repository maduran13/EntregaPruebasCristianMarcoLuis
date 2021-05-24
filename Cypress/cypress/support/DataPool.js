const faker = require("faker");

const label_for_create_tag = faker.lorem.sentence();
const label_for_create_internal_tag = faker.lorem.sentence();
const label_for_update_tag = faker.lorem.sentence();
const label_for_delete_tag = faker.lorem.sentence();

const label_for_create_delete_post = faker.lorem.sentence();

const label_for_create_page = faker.lorem.sentence();
const label_for_update_page = faker.lorem.sentence();
const label_for_delete_page = faker.lorem.sentence();

const label_for_schedule_post = faker.lorem.sentence();
const label_for_reschedule_post = faker.lorem.sentence();

class DataPool {

	getDataForCreateTag() {
		return label_for_create_tag;
	}

	getDataForCreateInternalTag() {
		return label_for_create_internal_tag;
	}
	
	getDataForUpdateTag() {
		return label_for_update_tag;
	}

	getDataForDeleteTag() {
		return label_for_delete_tag;
	}

    getDataForCreateDeletePost() {
		return label_for_create_delete_post;
	}

	getDataForCreatePage(){
		return label_for_create_page;
	}

    getDataForUpdatePage(){
		return label_for_update_page;
	}
	
	getDataForDeletePage(){
		return label_for_delete_page;
	}

    getDataForCreateSchedulePost(){
		return label_for_schedule_post;
	}

    getDataForUpdateSchedulePost(){
		return label_for_reschedule_post;
	}

}
export default DataPool