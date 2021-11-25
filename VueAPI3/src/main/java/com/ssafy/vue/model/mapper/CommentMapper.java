package com.ssafy.vue.model.mapper;

import java.sql.SQLException;
import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.model.CommentDto;


@Mapper
public interface CommentMapper {
	public int writeMemo(CommentDto commentDto) throws Exception;
}
