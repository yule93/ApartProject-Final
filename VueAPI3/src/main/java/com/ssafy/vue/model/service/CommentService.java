package com.ssafy.vue.model.service;

import java.util.List;

import com.ssafy.vue.model.CommentDto;

public interface CommentService {
	public boolean writeMemo(CommentDto commentDto) throws Exception;

}
