package com.ssafy.vue.model.mapper;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.model.MemberDto;

@Mapper
public interface MemberMapper {

	public MemberDto login(MemberDto memberDto) throws SQLException;
	public MemberDto userInfo(String userid) throws SQLException;
	public void updateMember(MemberDto memberDto) throws SQLException;
	public int registerMember(MemberDto memberDto) throws Exception;
	public List<MemberDto> listMember() throws Exception;
	public MemberDto findPassword(Map<String, String> map) throws Exception;
	public int deleteMember(String userid) throws Exception;
	public int idCheck(String checkId) throws Exception;
	public int modifyMember(MemberDto memberDto);
}
