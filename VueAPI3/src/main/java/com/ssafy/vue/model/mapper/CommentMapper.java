package com.ssafy.vue.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.model.CommentDto;

@Mapper
public interface CommentMapper {
	public int writeMemo(CommentDto commentDto) throws Exception;
	public List<CommentDto> commentList(int articleno) throws Exception;
}
