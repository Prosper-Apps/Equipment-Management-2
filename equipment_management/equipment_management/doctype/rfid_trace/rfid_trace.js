// Copyright (c) 2022, Deepak Kumar and contributors
// For license information, please see license.txt

frappe.ui.form.on('RFID Trace', {
	refresh: function(frm) {
		if (frm.is_new()) {
			frm.set_value('posting_time',frappe.datetime.now_time())
			frm.set_df_property('edit_posting_time','hidden',0)
		}
		if (frm.doc.posting_time===undefined) {
			cur_frm.set_value('posting_date',cur_frm.doc.creation.split(' ')[0])
			cur_frm.set_value('posting_time',cur_frm.doc.creation.split(' ')[1])
		}
		
	},
	edit_posting_time: function(frm) {
		if (frm.is_new()) {
			if (frm.doc.edit_posting_time) {
				frm.set_df_property('posting_date','read_only',0)
				frm.set_df_property('posting_time','read_only',0)
			} else {
				frm.set_df_property('posting_date','read_only',1)
				frm.set_df_property('posting_time','read_only',1)
			}
		}
	}
});
